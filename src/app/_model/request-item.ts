import { Book } from "./book";
import { User } from "./user";

export class RequestItem {
  id: number;
  book: Book;
  date: Date;
  status: string;
  user: User;
}