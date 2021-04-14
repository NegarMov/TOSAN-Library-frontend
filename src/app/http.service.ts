import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publisher } from './_model/publisher';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url: string;
  private addUrl: string;

  private serverIP: string;
  private addPublisherUrl: string;
  private getPublishersUrl: string;

  constructor(private http: HttpClient) {
    this.serverIP = 'http://192.168.76.42:8080/'
    this.addPublisherUrl = this.serverIP + 'publisher/addPublisher'
    this.getPublishersUrl = this.serverIP + 'publisher/allPublishers'
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

}
