"use client";

import * as React from "react";
import { Coffee, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Coffee className="h-[1.2rem] w-[1.2rem] rotate-45" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const currentTheme = resolvedTheme || theme;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-coffee-100 dark:hover:bg-coffee-800"
        >
          {currentTheme === "dark" ? (
            <Moon className="h-[1.2rem] w-[1.2rem] text-coffee-200" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem] text-coffee-600" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="bg-coffee-50 dark:bg-coffee-900 border-coffee-200 dark:border-coffee-700"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="focus:bg-coffee-200 dark:focus:bg-coffee-800 text-coffee-900 dark:text-coffee-100 hover:bg-coffee-200 dark:hover:bg-coffee-800"
        >
          <Sun className="mr-2 h-4 w-4 text-coffee-600 dark:text-coffee-300" />
          <span>Light (Latte)</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="focus:bg-coffee-200 dark:focus:bg-coffee-800 text-coffee-900 dark:text-coffee-100 hover:bg-coffee-200 dark:hover:bg-coffee-800"
        >
          <Moon className="mr-2 h-4 w-4 text-coffee-600 dark:text-coffee-300" />
          <span>Dark (Espresso)</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="focus:bg-coffee-200 dark:focus:bg-coffee-800 text-coffee-900 dark:text-coffee-100 hover:bg-coffee-200 dark:hover:bg-coffee-800"
        >
          <Coffee className="mr-2 h-4 w-4 text-coffee-600 dark:text-coffee-300" />
          <span>System (Barista's Choice)</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
