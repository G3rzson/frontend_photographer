"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactsFormType, contactsSchema } from "../Validation/contactsSchema";
import CustomText from "./CustomText";
import { FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import CustomTextarea from "./CustomTextarea";
import { toast } from "sonner";

export default function ContactsForm() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactsFormType>({
    resolver: zodResolver(contactsSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  function onSubmit(data: ContactsFormType) {
    toast.success("Az adataid nem lettek elküldve! Ez csak egy demo oldal.");
    reset();
  }
  return (
    <Card className="box w-full sm:max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Vedd fel velünk a kapcsolatot</CardTitle>
        <CardDescription className="text-muted-foreground">
          A *-al jelölt mezők kötelezőek.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="contacts-form"
          data-testid="contacts-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <CustomText
              control={control}
              name="name"
              label="Név *"
              placeholder="Add meg a neved"
            />

            <CustomTextarea
              control={control}
              name="message"
              label="Üzenet *"
              placeholder="Írd ide az üzeneted"
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="w-full cursor-pointer"
          form="contacts-form"
          disabled={isSubmitting}
        >
          Küldés
        </Button>
      </CardFooter>
    </Card>
  );
}
