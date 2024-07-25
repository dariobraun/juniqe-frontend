export type Article = {
  id: number;
  author: string;
  title: string;
  dateAdded: string;
  images: {
    portrait: string[];
    landscape: string[];
  }[];
  likes: number;
};
