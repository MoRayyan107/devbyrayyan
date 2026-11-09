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
// Use actual captures, then set these to BASE_URL + their public/assets paths.
export const projectMedia: {
  dashboard: string | null;
  zero: string | null;
  duck: string | null;
} = {
  dashboard: null,
  zero: null,
  duck: null,
};
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
export const games = [
  {
    name: 'Zero Hour',
    slug: 'zero-hour',
    className: 'zero',
    label: '2nd place · StrathHack 2026 · ScottishPower',
    url: 'https://team-20-1.onrender.com/',
    line: 'One night. One vault. Keep the attackers out.',
    description:
      'Built for ScottishPower’s cyber security awareness challenge at StrathHack 2026. Defend a fictional energy company’s data vault through one night of attack.',
    summary: 'A cyber security awareness game, built in a team of five.',
    context: 'Our team of five took second place at StrathHack 2026.',
    art: 'ZERO HOUR_',
    symbol: '⌘',
  },
  {
    name: 'Duck Run',
    slug: 'duck-run',
    className: 'duck',
    label: 'GUTS / JPMORGAN CHALLENGE',
    url: 'https://duck-run-lac.vercel.app/',
    line: 'Less talk. More waddle.',
    description:
      'A two-key browser game with a backend, built by a team for the JPMorgan challenge at GUTS.',
    summary: 'A two-key browser game with a backend, built with a team at GUTS.',
    context: 'A team project for the JPMorgan challenge at the GUTS hackathon.',
    art: 'DUCK RUN',
    symbol: '🦆',
  },
];
export type GameProject = (typeof games)[number];
