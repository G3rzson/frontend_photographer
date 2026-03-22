import { NAV_LINKS } from "../../../Constants/constants";
import Link from "next/dist/client/link";

export default function DesktopNav() {
  return (
    <ul className="hidden md:flex flex-row items-center justify-end gap-4">
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
}
