"use client";

import * as React from "react";

import { Button } from "@/registry/new-york/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/registry/lib/utils";

type ThemeToggleProps = {
  theme: "light" | "dark";
} & React.ComponentPropsWithRef<"button">;

function ThemeToggle({ theme, className, ...props }: ThemeToggleProps) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn("text-lg cursor-pointer", className)}
      {...props}
    >
      {theme === "light" ? (
        <SunIcon className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
    </Button>
  );
}

export { ThemeToggle, type ThemeToggleProps };
