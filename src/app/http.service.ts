import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publisher } from './_model/publisher';
import { Author } from './_model/author';
import { Book } from './_model/book';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url: string;
  private addUrl: string;

  private serverIP: string;

  private addPublisherUrl: string;
  private getPublishersUrl: string;

  private getAuthorsUrl: string;
  private addAuthorUrl: string;

  private getBooksUrl: string;
  private addBookUrl: string;

  constructor(private http: HttpClient) {
    this.serverIP = 'http://192.168.76.42:8080/';
    this.addPublisherUrl = this.serverIP + 'publisher/addPublisher';
    this.getPublishersUrl = this.serverIP + 'publisher/allPublishers';

    this.getAuthorsUrl = this.serverIP + 'author/allAuthors';
    this.addAuthorUrl = this.serverIP + 'author/addAuthor';

    this.getBooksUrl = this.serverIP + 'book/allBooks';
    this.addBookUrl = this.serverIP + 'book/addBook';
  }

  public getPublishers() : Observable<Publisher[]> {
    return this.http.post<Publisher[]>(this.getPublishersUrl, "");
  }

  public addPublisher(publisher: Publisher) {
    return this.http.post<Publisher[]>(this.addPublisherUrl, publisher);
  }

  public searchPublisher(searchedToken: string) : Observable<Publisher[]> {
    return this.http.post<Publisher[]>(this.serverIP + 'publisher/search/' + searchedToken, "");
  }

  public getAuthors() : Observable<Author[]> {
    return this.http.post<Author[]>(this.getAuthorsUrl, "");
  }

  public addAuthor(author: Author) {
    return this.http.post<Author[]>(this.addAuthorUrl, author);
  }

  public searchAuthor(searchedToken: string) : Observable<Author[]> {
    return this.http.post<Author[]>(this.serverIP + 'author/search/' + searchedToken, "");
  }

  public getBooks() : Observable<Book[]> {
    return this.http.post<Book[]>(this.getBooksUrl, "");
  }

  public addBook(book: Book) {
    return this.http.post<Book[]>(this.addBookUrl, book);
  }

  public searchBook(searchedToken: string) : Observable<Book[]> {
    return this.http.post<Book[]>(this.serverIP + 'book/search/' + searchedToken, "");
  }

}
