import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="w-full border-b bg-background sticky top-0 left-0 z-50">
      <nav className="flex items-center justify-between md:w-4/5 w-full mx-auto">
        <Logo />

        <DesktopNav />

        <MobileNav />
      </nav>
    </header>
  );
}
