import { Message } from './message';
import { Article } from './article';

export type Response = {
  message: Message;
  payload: {
    data: Article[];
  };
};
