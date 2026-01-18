import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    fullWidth?: boolean;
}

export const Section = ({
    className,
    children,
    fullWidth = false,
    ...props
}: SectionProps) => {
    return (
        <section
            className={cn(
                "py-24 md:py-32 relative overflow-hidden",
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    "mx-auto px-6",
                    fullWidth ? "w-full" : "max-w-7xl"
                )}
            >
                {children}
            </div>
        </section>
    );
};
