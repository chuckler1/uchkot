"use client";

import Button from "@/components/Button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  {
    name: "О нас",
    href: "#about",
  },
  {
    name: "Услуги",
    href: "#services",
  },
  {
    name: "Контакты",
    href: "#contacts",
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const goToContacts = () => router.push("/#feedback");
  // Закрываем меню, если кликнули вне него.
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container mx-auto max-w-5xl flex justify-between items-center bg-white shadow-md px-4 py-2">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Учёный Кот — логотип" width={50} height={50} />
          <div className="flex flex-col">
            <p className="font-neucha text-2xl md:text-3xl lg:text-4xl">
              Учёный Кот
            </p>
            <p className="text-xs sm:text-base text-[var(--secondary)]">
              Студия раннего развития
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <nav className="flex items-center gap-6 lg:gap-10 text-xs sm:text-xl text-[var(--secondary)] roboto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[var(--secondary)]/60 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="menu relative lg:hidden" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-xl transition-colors
              backdrop-blur-[3px]
              hover:bg-black/5 active:bg-black/10
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20
              ${isMenuOpen ? "bg-black/5 ring-1 ring-black/10" : ""}
            `}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
          >
            <Menu />
          </button>

          {/* Выпадающее меню. */}
          <div
            className={`absolute right-0 top-full mt-3 w-72 z-50
              overflow-hidden rounded-2xl
              border border-white/35 ring-1 ring-white/25
              bg-neutral-400/20 backdrop-blur-[3px]
              shadow-[0_18px_70px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.55)]
              before:pointer-events-none before:absolute before:inset-0 before:z-0
              before:bg-[radial-gradient(120%_100%_at_0%_0%,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.14)_35%,rgba(255,255,255,0)_70%)]
              after:pointer-events-none after:absolute after:inset-0 after:z-0 after:opacity-25
              after:bg-[linear-gradient(0deg,rgba(255,255,255,0.20),rgba(255,255,255,0)_30%,rgba(255,255,255,0)_70%,rgba(255,255,255,0.16)),url('/noise.svg')]
              after:mix-blend-overlay
              origin-top-right transition-all duration-200 ease-out
              ${isMenuOpen ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-2 scale-[0.98]"}
            `}
            role="menu"
            aria-hidden={!isMenuOpen}
          >
            <div className="relative z-10 p-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-xl px-4 py-2 text-[var(--foreground)]
                    hover:bg-white/30 active:bg-white/45 transition-colors
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-2 px-2 pb-1">
                <Button
                  variant="primary"
                  onClick={() => {
                    setIsMenuOpen(false);
                    goToContacts();
                  }}
                >
                  Записаться
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Button variant="primary" onClick={goToContacts}>
            Записаться
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
