import { Section } from "@/types/common";

export const intro: Section = {
 id: "contact-us",
 title: "Contact Us",
 content: [
  {
   type: "paragraph",
   text:
    "Welcome to <1>Eggyicar.one<1>, the official website for Eggy Car fans and players around the world!",
   inlines: {
    "1": {
     type: "span",
     className: "font-bold",
    },
   },
  },
  {
   type: "new-line",
   text:
    "We’re always excited to hear from our community. Whether you have a question, suggestion, or just want to share your gaming experience, our team is here to listen.",
  },
  {
   type: "paragraph",
   text: "📧 <1>Email:<1> support@eggyicar.one",
   inlines: {
    "1": {
     type: "span",
     className: "font-bold",
    },
   },
  },
  {
   type: "new-line",
   text: "🌐 <1>Website:<1> <2>www.eggyicar.one<2>",
   inlines: {
    "1": {
     type: "span",
     className: "font-bold",
    },
    "2": {
     type: "link",
     href: "/",
     className: "font-light",
    },
   },
  },
  {
   type: "new-line",
   text: "📱 <1>Support Hours:<1> Monday–Friday, 9:00 AM – 5:00 PM (GMT)",
   inlines: {
    "1": {
     type: "span",
     className: "font-bold",
    },
   },
  },
  {
   type: "paragraph",
   text:
    "Your feedback helps us make Eggyicar.one better for everyone. Don’t hesitate to reach out — we’ll get back to you as soon as possible",
  },
 ],
};
