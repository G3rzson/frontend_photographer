import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

// todo: add animation to navlinks
// todo: add lazy loading to images
// todo: add unit tests to components

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row grow items-center justify-between gap-8">
      <div className="w-full md:max-w-60 max-w-40">
        <AspectRatio ratio={9 / 16} className="rounded-lg bg-muted relative">
          <Image
            src="/profil.png"
            alt="Profilkép"
            fill
            className="rounded-lg object-cover grayscale"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 200px, 160px"
            loading="eager"
          />
        </AspectRatio>
      </div>

      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 md:text-end text-center">
          Üdvözöllek a portfóliómban!
        </h1>
        <p className="md:text-lg text-muted-foreground text-balance md:text-end text-center">
          Fedezd fel a legjobb fotóimat, amelyek különböző témákban és
          stílusokban készültek. Minden kép egy történetet mesél el, és remélem,
          hogy te is megtalálod a kedvencedet!
        </p>
      </div>
    </div>
  );
}
