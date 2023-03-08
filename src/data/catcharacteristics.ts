export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Alex",
    slug: "alex-human",
    image: "./src/assets/authors/mario.webp",
    bio: "Cool human.",
  },
  {
    name: "Vika",
    slug: "vika-human",
    image: "./src/assets/authors/joshua.webp",
    bio: "Cool human.",
  },
  {
    name: "punika",
    slug: "erika-cat",
    image: "./src/assets/authors/erika.webp",
    bio: "Cool cat.",
  },
  {
    name: "Borea",
    slug: "borea-cat",
    image: "./src/assets/authors/erika.webp",
    bio: "Cool cat.",
  },
];
