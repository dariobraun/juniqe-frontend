export type Article = {
  id: 1;
  author: string;
  title: string;
  dateAdded: string;
  images: {
    portrait: string[];
    landscape: string[];
  }[];
  likes: number;
};
