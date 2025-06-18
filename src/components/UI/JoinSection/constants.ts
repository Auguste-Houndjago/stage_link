import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import lady_prepre from '../../../../public/images/lady_prepre.jpg';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Cette plateforme a transformé ma recherche de stage. Les offres sont pertinentes et le suivi des candidatures est très intuitif. J'ai trouvé mon stage idéal en seulement quelques semaines.",
    person: 'Robert Agnes',
    avatar: robert_fox,
  },
  {
    testimony:
      "Mon studio est actuellement en feu , je recommande cette application a tout les futures P.DIDY 🎶",
    person: 'Joe Boy',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "La plateforme m'a beaucoup aidée dans ma recherche de stage. L'interface est claire, les offres sont nombreuses et le processus de candidature est très simple. Je recommande vivement !",
    person: 'LADY PREPRE',
    avatar: lady_prepre,
  },
  {
    testimony:
      "Je suis très satisfait de cette plateforme. Le système de matching est excellent et m'a permis de trouver des stages qui correspondent parfaitement à mon profil et à mes aspirations professionnelles.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Cette plateforme a transformé ma recherche de stage. Les offres sont pertinentes et le suivi des candidatures est très intuitif. J'ai trouvé mon stage idéal en seulement quelques semaines.",
    person: 'Robert Komi',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Rejoignez plus de 10 000', 'étudiants satisfaits'];
