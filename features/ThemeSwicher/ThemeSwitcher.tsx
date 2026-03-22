"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LaptopMinimalCheck, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { is } from "zod/locales";

export function ThemeSwitcher({ isMobile }: { isMobile: boolean }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" title="Téma kiválasztása" className="w-full">
          {theme === "light" ? (
            <Sun />
          ) : theme === "dark" ? (
            <Moon />
          ) : (
            <LaptopMinimalCheck />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isMobile ? "center" : "end"}
        className={
          isMobile ? "min-w-(--radix-dropdown-menu-trigger-width)" : "w-fit"
        }
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Téma kiválasztása</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={theme}
            onValueChange={(value) =>
              setTheme(value as "light" | "dark" | "system")
            }
          >
            <DropdownMenuRadioItem value="light">
              <Sun className="mr-2" />
              Világos
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">
              <Moon className="mr-2" />
              Sötét
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">
              <LaptopMinimalCheck className="mr-2" />
              Rendszer
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
