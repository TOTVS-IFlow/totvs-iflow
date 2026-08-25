import React from "react";

export default function GenericCard({ icon, title, children, className = "" }) {
  const Icon = icon
  return (
    <div className={`bg-surface p-4 rounded-xl ${className}`}>
      <header className="flex mb-3 text-gray-500 text-xs font-sora font-semibold items-center gap-1.5 ">
        <Icon size={16}/>
        {title}
      </header>
      {children}
    </div>
  );
}
