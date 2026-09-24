import React from "react";
import Link from "next/link";

interface HoverLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function HoverLink({ href, children, className = "", external = false }: HoverLinkProps) {
  const Component = external ? "a" : Link;
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Component
      href={href}
      className={`group relative inline-flex font-technical text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300 ${className}`}
      {...externalProps}
    >
      <span className="relative z-10 pb-1">{children}</span>
      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[var(--accent-primary)] transition-all duration-300 ease-in-out group-hover:w-full" />
    </Component>
  );
}
