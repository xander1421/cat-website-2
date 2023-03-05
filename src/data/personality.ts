export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Personality = Props;

export const personalities: Props[] = [
  {
    title: "Calm",
    slug: "calm",
    color: "orange",
    description:
      "Calm and quaiet cat.",
  },
  {
    title: "Playful",
    slug: "playful",
    color: "blue",
    description:
      "Likes to play a lot.",
  },
  {
    title: "Energetic",
    slug: "energetic",
    color: "green",
    description:
      "Can run 100 km every morning and beat the most trained humans.",
  },
  {
    title: "Affectionate",
    slug: "affectionate",
    color: "pink",
    description:
      "Will want cuddles all the time.",
  },
  {
    title: "Friendly",
    slug: "friendly",
    color: "purple",
    description:
      "Always willing to be around other humans or pets.",
  },
];
