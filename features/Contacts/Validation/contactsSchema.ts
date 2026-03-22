import z from "zod";

export const contactsSchema = z.object({
  name: z
    .string()
    .trim()
    .toLowerCase()
    .transform((str) => str.replace(/\s+/g, " "))
    .pipe(
      z.string().min(1, "A név kötelező!").max(30, "Max hossz 30 karakter!"),
    ),
  message: z
    .string()
    .trim()
    .transform((str) => str.replace(/\s+/g, " "))
    .pipe(
      z
        .string()
        .min(1, "Az üzenet kötelező!")
        .max(100, "Üzenet max 100 karakter!"),
    ),
});

export type ContactsFormType = z.infer<typeof contactsSchema>;
