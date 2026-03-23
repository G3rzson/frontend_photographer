import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col grow items-center justify-center gap-8">
      <h1 className="text-4xl font-bold text-center">Page Not Found!</h1>

      <Link
        href="/"
        className="flex flex-row gap-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg items-center transition-colors hover:bg-primary/90"
      >
        <ArrowBigLeft /> Go to the home page
      </Link>
    </div>
  );
}
