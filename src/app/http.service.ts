import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publisher } from './_model/publisher';
import { Author } from './_model/author';
import { Book } from './_model/book';
import { User } from './_model/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private serverIP: string;

  private addPublisherUrl: string;
  private getPublishersUrl: string;

  private getAuthorsUrl: string;
  private addAuthorUrl: string;

  private getBooksUrl: string;
  private addBookUrl: string;

  private userSignupUrl: string;

  constructor(private http: HttpClient) {
    this.serverIP = 'http://192.168.76.42:8080/';
    
    this.addPublisherUrl = this.serverIP + 'publisher/addPublisher';
    this.getPublishersUrl = this.serverIP + 'publisher/allPublishers';

    this.getAuthorsUrl = this.serverIP + 'author/allAuthors';
    this.addAuthorUrl = this.serverIP + 'author/addAuthor';

    this.getBooksUrl = this.serverIP + 'book/allBooks';
    this.addBookUrl = this.serverIP + 'book/addBook';

    this.userSignupUrl = this.serverIP + 'user/addUser';
  }

  public addUser(user: User) {
    return this.http.post(this.userSignupUrl, user);
  } 

  public authenticateUser(username: string, password: string) {
    return this.http.post<number>(this.serverIP + "login/" + username + "/" + password, "");
  }

  public getBookByName(bookName: string) {
    return this.http.get<Book>(this.serverIP + "book/" + bookName);
  }

  //####### PUBLISHER METHODS #######/
  public getPublishers() : Observable<Publisher[]> {
    return this.http.post<Publisher[]>(this.getPublishersUrl, "");
  }

  public addPublisher(publisher: Publisher) {
    return this.http.post<Publisher[]>(this.addPublisherUrl, publisher);
  }

  public searchPublisher(searchedToken: string) : Observable<Publisher[]> {
    return this.http.post<Publisher[]>(this.serverIP + 'publisher/search/' + searchedToken, "");
  }

  public updatePublisher(oldName: string, newPublisher: Publisher) {
    return this.http.post<Publisher>(this.serverIP + 'publisher/edit/' + oldName, newPublisher);
  }

  public deletePublisher(publisher: string) {
    return this.http.delete<Publisher[]>(this.serverIP + 'publisher/delete/' + publisher);
  }

  //####### AUTHOR METHODS #######/
  public getAuthors() : Observable<Author[]> {
    return this.http.post<Author[]>(this.getAuthorsUrl, "");
  }

  public addAuthor(author: Author) {
    return this.http.post<Author[]>(this.addAuthorUrl, author);
  }

  public searchAuthor(searchedToken: string) : Observable<Author[]> {
    return this.http.post<Author[]>(this.serverIP + 'author/search/' + searchedToken, "");
  }

  public deleteAuthor(author: string) {
    return this.http.delete<Author[]>(this.serverIP + 'author/delete/' + author);
  }

  public updateAuthor(oldName: string, newAuthor: Author) {
    return this.http.post<Author>(this.serverIP + 'author/edit/' + oldName, newAuthor);
  }

  //####### BOOK METHODS #######/
  public getBooks() : Observable<Book[]> {
    return this.http.post<Book[]>(this.getBooksUrl, "");
  }

  public addBook(book: Book) {
    return this.http.post<Book[]>(this.addBookUrl, book);
  }

  public searchBook(searchedToken: string) : Observable<Book[]> {
    return this.http.post<Book[]>(this.serverIP + 'book/search/' + searchedToken, "");
  }

  public deleteBook(book: string) {
    return this.http.delete<Book[]>(this.serverIP + 'book/delete/' + book);
  }

  public updateBook(oldName: string, newBook: Book) {
    return this.http.post<Book>(this.serverIP + 'book/edit/' + oldName, newBook);
  }

}
