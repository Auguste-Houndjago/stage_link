type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Questions', 'fréquentes'];
export const mobileHeaderPhrase = ['Questions', 'fréquentes'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'Comment puis-je postuler pour un stage ?',
    answer:
      'Pour postuler à un stage, créez un compte sur notre plateforme, complétez votre profil et parcourez les offres disponibles. Vous pourrez ensuite soumettre votre candidature en quelques clics.',
  },
  {
    question: 'Quels documents dois-je fournir pour ma candidature ?',
    answer:
      'Vous devrez fournir votre CV, une lettre de motivation, vos relevés de notes et éventuellement une lettre de recommandation. Tous les documents doivent être au format PDF.',
  },
  {
    question: 'Comment suivre l\'état de ma candidature ?',
    answer:
      'Vous pouvez suivre l\'état de votre candidature en temps réel dans votre espace personnel. Vous recevrez également des notifications par email à chaque étape importante.',
  },
  {
    question: 'Quelle est la durée moyenne d\'un stage ?',
    answer:
      'La durée des stages varie généralement entre 2 et 6 mois, selon le type de stage et les besoins de l\'entreprise. Les stages peuvent être à temps plein ou à temps partiel.',
  },
];
