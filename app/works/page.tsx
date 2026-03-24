"use client";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PROJEKTS } from "@/constants/constants";

export default function ProjectsPage() {
  return (
    <div className="sm:px-4 md:px-0 flex grow flex-col gap-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Munkák</h1>
      {PROJEKTS.map((project) => (
        <Card className="box mx-auto w-full" key={project.title}>
          <CardContent>
            <Collapsible className="box rounded-md">
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="box group w-full text-xl md:text-2xl"
                >
                  {project.title}
                  <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-4 text-sm">
                <Carousel className="w-4/5 mx-auto">
                  <CarouselContent>
                    {project.images.map((image) => (
                      <CarouselItem
                        key={image.alt}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="relative h-50 md:h-75 lg:h-100 w-full">
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                placeholder="blur"
                                className="rounded-xl object-cover select-none pointer-events-none"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                            </div>
                          </DialogTrigger>

                          <DialogContent className="max-w-[95vw]! w-full h-[90vh] flex flex-col grow">
                            <DialogTitle>{image.alt}</DialogTitle>
                            <DialogDescription className="sr-only">
                              Kattints a képre a bezáráshoz.
                            </DialogDescription>
                            <div className="relative w-full h-full flex items-center justify-center">
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                placeholder="blur"
                                className="object-contain rounded-2xl overflow-hidden select-none pointer-events-none"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
