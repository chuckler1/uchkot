import React, { InputHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-[var(--secondary)] shadow-sm outline-none transition placeholder:text-[var(--secondary)]/60 focus:border-[var(--foreground)]/40 focus:ring-2 focus:ring-[var(--foreground)]/20 disabled:cursor-not-allowed disabled:opacity-60"
);

export default function Input(
  props: InputHTMLAttributes<HTMLInputElement>
): React.JSX.Element {
  const { className, ...otherProps } = props;

  return <input className={inputVariants({ className })} {...otherProps} />;
}

