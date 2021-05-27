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
    const url = `${this.paperUrl}/{id}`;
    return this.httpClient.post<any>(url, paper);
  }
}
