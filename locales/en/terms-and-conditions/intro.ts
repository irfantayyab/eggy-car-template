import { Section } from "@/types/common";

export const intro: Section = {
 id: "terms-and-conditions",
 title: "Terms & Conditions",
 content: [
  {
   type: "paragraph",
   text: "Welcome to <1>Eggy Car<1>!",
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
    "By accessing or using our website (<1>eggycar.one<1>), you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our services.",
   inlines: {
    "1": {
     type: "link",
     href: "/",
     className: "font-light",
    },
   },
  },
  {
   type: "subsection",
   id: "use-of-the-website",
   title: "1. Use of the Website",
   content: [
    {
     type: "paragraph",
     text:
      "You agree to use this website only for lawful purposes and in a way that does not violate the rights of others or restrict their use of the site. Any misuse or attempt to damage the website is strictly prohibited.",
    },
   ],
  },
  {
   type: "subsection",
   id: "intellectual-property",
   title: "2. Intellectual Property",
   content: [
    {
     type: "paragraph",
     text:
      "All content on <1>eggycar.one<1>, including text, graphics, logos, and game materials, is the property of <2>Eggy Car<2> or its respective owners. You may not copy, reproduce, or distribute any materials without written permission.",
     inlines: {
      "1": {
       type: "span",
       className: "font-bold",
      },
      "2": {
       type: "span",
       className: "font-bold",
      },
     },
    },
   ],
  },
  {
   type: "subsection",
   id: "user-responsibilities",
   title: "3. User Responsibilities",
   content: [
    {
     type: "paragraph",
     text:
      "You are responsible for maintaining the confidentiality of your information and for any activity under your account (if applicable).",
    },
   ],
  },
  {
   type: "subsection",
   id: "external-links",
   title: "4. External Links",
   content: [
    {
     type: "paragraph",
     text:
      "Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.",
    },
   ],
  },
  {
   type: "subsection",
   id: "limitation-of-liability",
   title: "5. Limitation of Liability",
   content: [
    {
     type: "paragraph",
     text:
      "<1>Eggy Car<1> will not be held liable for any direct or indirect damages resulting from the use or inability to use our website or its content.",
     inlines: {
      "1": {
       type: "span",
       className: "font-bold",
      },
     },
    },
   ],
  },
  {
   type: "subsection",
   id: "updates-to-terms",
   title: "6. Updates to Terms",
   content: [
    {
     type: "paragraph",
     text:
      "We may update or modify these Terms and Conditions at any time. Changes will take effect immediately upon posting on this page.",
    },
   ],
  },
  {
   type: "subsection",
   id: "contact-us",
   title: "7. Contact Us",
   content: [
    {
     type: "paragraph",
     text: "If you have any questions about these Terms and Conditions, please contact us at:",
    },
    {
     type: "new-line",
     text: "📧 <1>support@eggycar.one<1>",
     inlines: {
      "1": {
       type: "link",
       href: "mailto:support@eggycar.one",
      },
     },
    },
   ],
  },
 ],
};
