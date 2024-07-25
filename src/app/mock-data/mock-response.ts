import { Response } from '../dev-articles/model/response';

export const mockResponse: Response = {
  message: {
    status: 'success',
    code: 'code',
    text: 'successfully fetched data',
  },
  payload: {
    data: [
      {
        id: 1,
        author: 'buthor',
        title: 'title',
        dateAdded: '2024-01-01',
        images: [
          {
            portrait: ['https://www.image-source', 'https://www.image-source'],
            landscape: ['https://www.image-source', 'https://www.image-source'],
          },
        ],
        likes: 2,
      },
      {
        id: 2,
        author: 'author',
        title: 'title',
        dateAdded: '1970-01-01',
        images: [
          {
            portrait: ['https://www.image-source', 'https://www.image-source'],
            landscape: ['https://www.image-source', 'https://www.image-source'],
          },
        ],
        likes: 3,
      },
    ],
  },
};
