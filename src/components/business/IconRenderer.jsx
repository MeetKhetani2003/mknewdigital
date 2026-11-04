import React from "react";
import * as LucideIcons from "lucide-react";

export function IconRenderer({ name = "Sparkles", className = "w-6 h-6", ...props }) {
  const IconComponent = LucideIcons[name] || LucideIcons.Sparkles;
  return <IconComponent className={className} {...props} />;
}

