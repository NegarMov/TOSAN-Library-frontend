import { Book } from "./book";

export interface Genre {
    name: string;
    explanation: string;
    books: Book[];
}