import { cp, rm, stat } from "node:fs/promises";
import path from "node:path";

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const root = process.cwd();
  const nextDir = path.join(root, ".next");
  const standaloneDir = path.join(nextDir, "standalone");
  const isAmvera = root === "/source" || root.startsWith("/source/");

  if (!(await exists(standaloneDir))) {
    console.error(
      `[amvera-postbuild] Expected ${standaloneDir} to exist. Did you set nextConfig.output = "standalone"?`,
    );
    process.exit(1);
  }

  // Next.js standalone output needs these at runtime:
  // - public/
  // - .next/static/
  const srcPublic = path.join(root, "public");
  const srcStatic = path.join(nextDir, "static");

  const dstPublic = path.join(standaloneDir, "public");
  const dstStatic = path.join(standaloneDir, ".next", "static");

  if (await exists(srcPublic)) {
    await cp(srcPublic, dstPublic, { recursive: true });
    console.log(`[amvera-postbuild] Copied public -> ${path.relative(root, dstPublic)}`);
  } else {
    console.log("[amvera-postbuild] No public/ directory found, skipping.");
  }

  if (await exists(srcStatic)) {
    await cp(srcStatic, dstStatic, { recursive: true });
    console.log(`[amvera-postbuild] Copied .next/static -> ${path.relative(root, dstStatic)}`);
  } else {
    console.log("[amvera-postbuild] No .next/static directory found, skipping.");
  }

  if (!isAmvera) {
    console.log(
      `[amvera-postbuild] Not running in Amvera (/source). Skipping cleanup to avoid deleting local node_modules/.git.`,
    );
    return;
  }

  // Reduce archive size in Amvera: these are not needed at runtime for standalone server.
  // Important: do NOT delete .git — Amvera reads git metadata after archiving.
  const cleanupTargets = [path.join(root, "node_modules"), path.join(nextDir, "cache")];

  for (const target of cleanupTargets) {
    if (!(await exists(target))) continue;
    try {
      await rm(target, { recursive: true, force: true });
      console.log(`[amvera-postbuild] Removed ${path.relative(root, target)}`);
    } catch (err) {
      console.warn(`[amvera-postbuild] Failed to remove ${path.relative(root, target)}:`, err);
    }
  }
}

await main();

