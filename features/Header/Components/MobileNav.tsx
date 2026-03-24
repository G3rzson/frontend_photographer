"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { NAV_LINKS } from "@/constants/constants";
import { ThemeSwitcher } from "@/features/ThemeSwicher/ThemeSwitcher";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="capitalize md:hidden mr-4"
          onClick={(e) => e.currentTarget.blur()}
        >
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        autoFocus
        className="w-fit max-w-fit data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]"
      >
        <DrawerHeader className="p-0">
          <Logo />
          <div className="no-scrollbar overflow-y-auto">
            <ul className="flex flex-col items-start my-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="w-full">
                  <DrawerClose asChild>
                    <Link
                      className={`${pathname === link.href ? "active" : ""} nav-link mobile w-full p-4 block`}
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </DrawerClose>
                </li>
              ))}

              <li className="w-full px-4">
                <ThemeSwitcher isMobile={true} />
              </li>
            </ul>
          </div>
          <DrawerTitle className="sr-only">Navigációs menü</DrawerTitle>
          <DrawerDescription className="sr-only">
            A weboldal fő navigációs linkjei
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="border-t">
          <DrawerClose asChild>
            <Button variant="outline">
              <X />
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
