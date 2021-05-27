import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Paper} from '../domain/paper.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaperService {
  private paperUrl = 'http://localhost:8080/paper';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  };

  constructor(private httpClient: HttpClient) { }

  addPaper(id: number, paper: Paper): Observable<any> {
    const url = `${this.paperUrl}/${id}`;
    return this.httpClient.post<any>(url, paper);
  }

  shufflePapers(id: number): Observable<any>{
    const url = `${this.paperUrl}s/shuffle/${id}`;
    return this.httpClient.get<any>(url);
  }

  getPapersFromConference(id: number): Observable<any>{
    const url = `${this.paperUrl}s/${id}`;
    return this.httpClient.get<any>(url);
  }

  sendResponse(userId: number, noOfPapersToReview: number): Observable<any>{
    const url = `${this.paperUrl}s`;
    const body = {
      userId,
      noOfPapersToReview
    };
    return this.httpClient.put<any>(url, body);
  }

  getPapersForReviewer(userId: number): Observable<any>{
    const url = `${this.paperUrl}/review/${userId}`;
    return this.httpClient.get<any>(url);
  }
}
