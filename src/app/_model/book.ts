import { Author } from "./author";
import { Publisher } from "./publisher";

export class Book {
    title: string;
    author: Author;
    publisher: Publisher;
    publicationDate: number;
    rating: number;
    genre: string;
    tags: string[];
    summary: string;
    coverUrl: string;
}