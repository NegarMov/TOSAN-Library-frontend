import { Book } from "./book";

export interface Genre {
    name: string;
    serverID: string;
    explanation: string;
    books: Book[];
    quantity: number;
    imageSrc: string;
}