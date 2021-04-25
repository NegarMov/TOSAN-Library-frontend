import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publisher } from '../_model/publisher';
import { Author } from '../_model/author';
import { Book } from '../_model/book';
import { RequestItem } from '../_model/request-item';

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

  constructor(private http: HttpClient) {
    this.serverIP = 'http://192.168.76.21:8080/';
    
    this.addPublisherUrl = this.serverIP + 'publisher/addPublisher';
    this.getPublishersUrl = this.serverIP + 'publisher/allPublishers';

    this.getAuthorsUrl = this.serverIP + 'author/allAuthors';
    this.addAuthorUrl = this.serverIP + 'author/addAuthor';

    this.getBooksUrl = this.serverIP + 'book/allBooks';
    this.addBookUrl = this.serverIP + 'book/addBook';
  }

  //####### USER METHODS #######/
  private getUserID() : number {
    return Number.parseInt(localStorage.getItem('userID'));
  }

  public addUser(username: string, password: string) {
    return this.http.post<boolean>(this.serverIP + 'user/addUser/' + username + "/" + password , "");
  } 

  public authenticateUser(username: string, password: string) {
    return this.http.post<number>(this.serverIP + "login/" + username + "/" + password, "");
  }

  public isAdmin() {
    return this.http.get<boolean>(this.serverIP + "/isAdmin/" + this.getUserID());
  }

  //####### PUBLISHER METHODS #######/
  public getPublishers() : Observable<Publisher[]> {
    return this.http.get<Publisher[]>(this.getPublishersUrl);
  }

  public addPublisher(publisher: Publisher) {
    return this.http.post<Publisher[]>(this.addPublisherUrl, publisher);
  }

  public searchPublisher(searchedToken: string) : Observable<Publisher[]> {
    return this.http.get<Publisher[]>(this.serverIP + 'publisher/search/' + searchedToken);
  }

  public updatePublisher(oldName: string, newPublisher: Publisher) {
    return this.http.post<Publisher>(this.serverIP + 'publisher/edit/' + oldName, newPublisher);
  }

  public deletePublisher(publisher: string) {
    return this.http.delete<Publisher[]>(this.serverIP + 'publisher/delete/' + publisher);
  }

  public getPublisherBooks(publisherName: string) {
    return this.http.get<Book[]>(this.serverIP + "publisher/books/" + publisherName);
  }

  public getPublisherByName(publisherName: string) {
    return this.http.get<Publisher>(this.serverIP + "publisher/" + publisherName);
  }

  //####### AUTHOR METHODS #######/
  public getAuthors() : Observable<Author[]> {
    return this.http.get<Author[]>(this.getAuthorsUrl);
  }

  public addAuthor(author: Author) {
    return this.http.post<Author[]>(this.addAuthorUrl, author);
  }

  public searchAuthor(searchedToken: string) : Observable<Author[]> {
    return this.http.get<Author[]>(this.serverIP + 'author/search/' + searchedToken);
  }

  public deleteAuthor(author: string) {
    return this.http.delete<Author[]>(this.serverIP + 'author/delete/' + author);
  }

  public updateAuthor(oldName: string, newAuthor: Author) {
    return this.http.post<Author>(this.serverIP + 'author/edit/' + oldName, newAuthor);
  }

  public getAuthorBooks(authorName: string) {
    return this.http.get<Book[]>(this.serverIP + "author/books/" + authorName);
  }

  public getAuthorByName(authorName: string) {
    return this.http.get<Author>(this.serverIP + "author/" + authorName);
  }

  //####### BOOK METHODS #######/
  public getBooks() : Observable<Book[]> {
    return this.http.get<Book[]>(this.getBooksUrl);
  }

  public addBook(book: Book) {
    return this.http.post<Book[]>(this.addBookUrl + "/" +  book.author.name + "/" + book.publisher.name, book);
  }

  public searchBook(searchedToken: string) : Observable<Book[]> {
    return this.http.get<Book[]>(this.serverIP + 'book/search/' + searchedToken);
  }

  public deleteBook(book: string) {
    return this.http.delete<Book[]>(this.serverIP + 'book/delete/' + book);
  }

  public updateBook(oldName: string, newBook: Book) {
    return this.http.post<Book>(this.serverIP + 'book/edit/' + oldName, newBook);
  }

  public getBookByName(bookName: string) {
    return this.http.get<Book>(this.serverIP + "book/" + bookName);
  }

  public getBooksByGenre(genreName: string) {
    return this.http.get<Book[]>(this.serverIP + "/book/sameGenre/" + genreName);
  }

  public searchBooksByGenre(genreName: string, searchedToken: string) {
    return this.http.get<Book[]>(this.serverIP + "/book/sameGenre/search/" + genreName + "/" + searchedToken);
  }

  //####### REQUEST METHODS #######/  
  public addRequest(bookName: string) {
    return this.http.post(this.serverIP + "user/addRequest/" + this.getUserID() + "/" + bookName, "");
  }

  public getAllRequests() {
    return this.http.get<RequestItem[]>(this.serverIP + "user/allRequests/" + this.getUserID());
  }

  public isRequested(bookName: string) {
    return this.http.get<boolean>(this.serverIP + "user/isInRequest/" + this.getUserID() + "/" + bookName);
  }

  public deleteRequest(requestID: number) {
    return this.http.delete<RequestItem[]>(this.serverIP + "user/deleteRequest/" + this.getUserID() + "/" + requestID);
  }

  public getAllRequests_admin() {
    return this.http.get<RequestItem[]>(this.serverIP + "request/allRequests");
  }

  public getAcceptedRequests_admin() {
    return this.http.get<RequestItem[]>(this.serverIP + "request/acceptedRequests");
  }

  public getRejectedRequests_admin() {
    return this.http.get<RequestItem[]>(this.serverIP + "request/rejectedRequests");
  }

  public getPendingRequests_admin() {
    return this.http.get<RequestItem[]>(this.serverIP + "request/pendingRequests");
  }

  public setReuqestStatus(requestID: number, status: string) {
    return this.http.post(this.serverIP + "admin/acceptOrReject/" + requestID + "/" + status, "");
  }

}
