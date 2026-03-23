"use client";
import { ThemeSwitcher } from "@/features/ThemeSwicher/ThemeSwitcher";
import { NAV_LINKS } from "../../../constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex flex-row items-center justify-end gap-4">
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`
              ${
                pathname === link.href
                  ? "nav-link desktop active"
                  : "nav-link desktop"
              } text-2xl`}
          >
            {link.title}
          </Link>
        </li>
      ))}
      <li>
        <ThemeSwitcher isMobile={false} />
      </li>
    </ul>
  );
}
