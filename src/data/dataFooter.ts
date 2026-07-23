import { Mail, Phone, MapPin } from "lucide-react";
import type { Language } from "../types/common";
import type { ContactInfo } from "../types/contact";

// Valeurs identiques dans toutes les langues (coordonnées réelles), seul le label change
export const contactInfos: Record<Language, ContactInfo[]> = {
  fr: [
    { icon: Mail, label: "Email", value: "heritianajulien12@gmail.com" },
    { icon: Phone, label: "Téléphone", value: "+261 34 40 925 49" },
    { icon: MapPin, label: "Adresse", value: "Antananarivo, Madagascar" },
  ],
  en: [
    { icon: Mail, label: "Email", value: "heritianajulien12@gmail.com" },
    { icon: Phone, label: "Phone", value: "+261 34 40 925 49" },
    { icon: MapPin, label: "Address", value: "Antananarivo, Madagascar" },
  ],
  de: [
    { icon: Mail, label: "E-Mail", value: "heritianajulien12@gmail.com" },
    { icon: Phone, label: "Telefon", value: "+261 34 40 925 49" },
    { icon: MapPin, label: "Adresse", value: "Antananarivo, Madagaskar" },
  ],
};

export const copyrightText: Record<Language, string> = {
  fr: `© ${new Date().getFullYear()} HERITIANA Julien — Tous droits réservés.`,
  en: `© ${new Date().getFullYear()} HERITIANA Julien — All rights reserved.`,
  de: `© ${new Date().getFullYear()} HERITIANA Julien — Alle Rechte vorbehalten.`,
};

export interface FooterTexts {
  titleBefore: string;
  titleHighlight: string;
  subtitle: string;
  successMessage: string;
  errorMessage: string;
  fullName: string;
  fullNamePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  sending: string;
  sent: string;
  send: string;
}

export const footerTexts: Record<Language, FooterTexts> = {
  fr: {
    titleBefore: "Me",
    titleHighlight: "Contacter",
    subtitle: "Une question, une collaboration ou un projet en tête ? Envoyez-moi un message et je vous répondrai rapidement.",
    successMessage: "Message envoyé avec succès ! Je vous répondrai bientôt.",
    errorMessage: "Erreur lors de l'envoi. Veuillez réessayer.",
    fullName: "Nom complet",
    fullNamePlaceholder: "Votre nom et prénom",
    email: "Adresse email",
    emailPlaceholder: "exemple@gmail.com",
    message: "Message",
    messagePlaceholder: "Votre message...",
    sending: "Envoi en cours...",
    sent: "Message envoyé !",
    send: "Envoyer le message",
  },
  en: {
    titleBefore: "Contact",
    titleHighlight: "Me",
    subtitle: "A question, a collaboration, or a project in mind? Send me a message and I'll get back to you quickly.",
    successMessage: "Message sent successfully! I'll get back to you soon.",
    errorMessage: "Error sending message. Please try again.",
    fullName: "Full name",
    fullNamePlaceholder: "Your first and last name",
    email: "Email address",
    emailPlaceholder: "example@gmail.com",
    message: "Message",
    messagePlaceholder: "Your message...",
    sending: "Sending...",
    sent: "Message sent!",
    send: "Send message",
  },
  de: {
    titleBefore: "Kontaktiere",
    titleHighlight: "mich",
    subtitle: "Eine Frage, eine Zusammenarbeit oder ein Projekt im Kopf? Schreiben Sie mir eine Nachricht, ich antworte schnell.",
    successMessage: "Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.",
    errorMessage: "Fehler beim Senden. Bitte versuchen Sie es erneut.",
    fullName: "Vollständiger Name",
    fullNamePlaceholder: "Ihr Vor- und Nachname",
    email: "E-Mail-Adresse",
    emailPlaceholder: "beispiel@gmail.com",
    message: "Nachricht",
    messagePlaceholder: "Ihre Nachricht...",
    sending: "Wird gesendet...",
    sent: "Nachricht gesendet!",
    send: "Nachricht senden",
  },
};