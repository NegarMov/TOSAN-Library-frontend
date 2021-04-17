import { Author } from "./author";
import { Publisher } from "./publisher";
import { User } from "./user";

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
    isAvailable: boolean;
    startDate: string;
    finishDate: string;
    user: User;
}