import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PRICE_LIST } from "@/Constants/constants";

export default function PricesPage() {
  return (
    <div className="sm:px-4 md:px-0 flex grow flex-col gap-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Árak</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {PRICE_LIST.map((price) => (
          <Card key={price.event} size="sm" className="w-full h-full">
            <CardHeader>
              <CardTitle>{price.event}</CardTitle>
              <CardDescription className="sr-only">
                {price.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold mb-2">
                Ár: {price.price.toLocaleString()} Ft
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Időtartam: {price.time}
              </p>
              <p className="text-sm text-muted-foreground text-balance">
                {price.description}
              </p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full cursor-pointer"
                  >
                    Megrendelés
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogTitle>{price.event}</DialogTitle>
                  <DialogDescription>
                    Fejlesztés alatt. Megértésed köszönjük!
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
