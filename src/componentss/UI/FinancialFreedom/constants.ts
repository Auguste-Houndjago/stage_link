import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_circle_stack from '../../../../public/svgs/ic_circle_stack.svg';
import ic_arrows_left_right from '../../../../public/svgs/ic_arrows_right_left.svg';

// For desktop
export const desktopHeaderPhrase = ['Votre Carrière,', 'Votre Avenir'];
export const desktopParagraphPhrase = [
  'Nous croyons que la recherche de stage devrait être simple et efficace.',
  'C\'est pourquoi nous vous offrons les outils dont vous avez besoin.',
];
export const desktopBriefNotePhrase = [
  'Offres de stage,',
  'suivi des candidatures,',
  'et conseils experts,',
  'tout en un seul endroit.',
];

// For mobile
export const mobileHeaderPhrase = ['Votre Carrière,', 'Votre Avenir'];
export const mobileParagraphPhrase = [
  'Nous croyons que la recherche de stage devrait être',
  'simple et efficace. C\'est pourquoi nous vous offrons',
  'les outils dont vous avez besoin.',
];

export const mobileBriefNotePhrase = [
  'Offres de',
  'stage,',
  'suivi des',
  'candidatures,',
  'et conseils',
  'experts, tout',
  'en un seul',
  'endroit.',
];

export const edges = [
  {
    point: 'Accès gratuit',
    details:
      'Profitez d\'un accès gratuit à toutes nos offres de stage. Votre compte, vos opportunités—sans frais cachés',
    icon: ic_banknotes,
  },
  {
    point: 'Suivi en temps réel',
    details:
      'Suivez l\'état de vos candidatures en temps réel. Restez informé de chaque étape de votre parcours',
    icon: ic_circle_stack,
  },
  {
    point: 'Notifications instantanées',
    details:
      'Recevez des notifications instantanées pour chaque mise à jour de vos candidatures. Ne manquez aucune opportunité.',
    icon: ic_arrows_left_right,
  },
];
