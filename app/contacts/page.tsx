import { SOCIALS } from "@/constants/constants";
import ContactsForm from "@/features/Contacts/Components/ContactsForm";
import Image from "next/image";

export default function ContactsPage() {
  return (
    <div className="sm:px-4 md:px-0 flex grow flex-col gap-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Kapcsolatok
      </h1>

      <h2 className="text-xl text-center text-balance">
        Egyedi igények vagy egyéb kérdések esetén lépjen kapcsolatba velünk:
      </h2>

      <ContactsForm />

      <div className="flex sm:flex-row flex-col gap-4 items-center justify-center my-2">
        <h3>Elérhetőségek:</h3>
        <ul className="flex flex-col sm:flex-row gap-4">
          {SOCIALS.map((social) => (
            <li key={social.name} className="flex items-center gap-2">
              <Image
                src={social.href}
                alt={social.name}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <p>{social.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
