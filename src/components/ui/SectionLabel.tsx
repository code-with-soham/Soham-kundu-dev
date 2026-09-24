import React from "react";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
  showLine?: boolean;
}

export default function SectionLabel({ number, label, className = "", showLine = true }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="text-label text-[var(--text-secondary)]">
        {label} <span className="text-[var(--text-tertiary)] mx-1">{"//"}</span> {number}
      </span>
      {showLine && (
        <div className="h-px flex-grow bg-[var(--border-default)] relative">
          <div className="absolute right-0 top-[-2px] w-[1px] h-[5px] bg-[var(--text-tertiary)]" />
        </div>
      )}
    </div>
  );
}
