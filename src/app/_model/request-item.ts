import { Book } from "./book";

export interface RequestItem {
  book: Book;
  startDate: Date;
  status: string;
}