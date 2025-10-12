import React, { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva("border p-2 px-4 rounded-md font-medium w-full sm:w-auto", {
    variants: {
        variant: {
            primary: "bg-[var(--foreground)] border-[var(--foreground)] text-white hover:bg-transparent hover:text-[var(--foreground)]",
            secondary: "border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white",
        },
    },
});

export default function Button(
    props: {
        variant: "primary" | "secondary";
    } & HTMLAttributes<HTMLButtonElement>
): React.JSX.Element {
    const { variant, className, ...otherProps } = props;
    return (
        <button
            className={buttonVariants({
                variant: variant,
                className: className,
            })}
            {...otherProps}
        />
    );
}