// dataFooter.ts

import { Mail, Phone, MapPin } from "lucide-react";

export interface ContactInfo {
  icon: React.ElementType;
  label: string;
  value: string;
}

export const contactInfos: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "heritianajulien12@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+261 34 40 925 49",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Cité Antarandolo Fianarantsoa, Madagascar",
  },
];

export const copyrightText = `© ${new Date().getFullYear()} HERITIANA Julien — Tous droits réservés.`;
