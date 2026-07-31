import type { ElementType, ReactNode } from "react";

type Theme = "agency" | "sedia";

export function ThemeScope({
  theme,
  as: Component = "div",
  className,
  children,
}: {
  theme: Theme;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Component data-theme={theme} className={className}>
      {children}
    </Component>
  );
}
