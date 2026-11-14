export const email = 'mailto:rayyan.adhoni@outlook.com';
export const github = 'https://github.com/MoRayyan107';
export const cvs = [
  {
    label: 'Download Summer CV',
    url: `${import.meta.env.BASE_URL}assets/Rayyan_Adhoni_Summer_CV.pdf`,
  },
  {
    label: 'Download Industrial CV',
    url: `${import.meta.env.BASE_URL}assets/Rayyan_Adhoni_Industrial_CV.pdf`,
  },
];
export const stacks = [
  'Java',
  'Spring Boot',
  'Kafka',
  'Redis',
  'PostgreSQL',
  'Docker',
  'React / TypeScript',
  'Git',
];
// Team hackathon games. `role` is only shown once Rayyan has confirmed it.
export const games: {
  name: string;
  slug: string;
  label: string;
  url: string;
  description: string;
  role?: string;
}[] = [
  {
    name: 'Zero Hour',
    slug: 'zero-hour',
    label: '2nd place · StrathHack 2026 · ScottishPower',
    url: 'https://team-20-1.onrender.com/',
    description:
      'A cyber security awareness game built by a team of five. Players get £3 million to spend on security controls across three categories, with at least one in each, then face four phases, each telling the story of an attack. Correct answers strengthen their shield.',
    role: 'I built the game engine, the score calculation and the offline player mode.',
  },
  {
    name: 'Duck Run',
    slug: 'duck-run',
    label: 'GUTS · JPMorgan challenge',
    url: 'https://duck-run-lac.vercel.app/',
    description:
      'A two-key browser runner with a backend, played over three phases that end in a boss fight.',
    role: 'I built the score calculation and the offline player mode.',
  },
];
