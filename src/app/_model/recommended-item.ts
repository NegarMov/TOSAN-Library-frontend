import { Book } from "./book";

export interface RecommendedItem {
    book: Book;
    status: string;
    editDate: Date;
}