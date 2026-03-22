import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Logo"
        width={200}
        height={100}
        className="w-50 h-auto"
        loading="eager"
      />
    </Link>
  );
}
