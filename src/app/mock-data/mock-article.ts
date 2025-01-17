import { Article } from '../dev-articles/model/article';

export const mockArticle: Article = {
  id: 1,
  author: 'author',
  title: 'title',
  dateAdded: '1970-01-01',
  images: [
    {
      portrait: ['https://www.image-source', 'https://www.image-source'],
      landscape: ['https://www.image-source', 'https://www.image-source'],
    },
  ],
  likes: 2,
};
