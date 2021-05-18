import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Conference} from '../domain/conference.model';

@Injectable()
export class ConferenceService{
  private conferenceUrl = 'http://localhost:8080/api/conferences';

  constructor(private httpClient: HttpClient) {
  }

  getConferences(): Observable<HttpResponse<any>>{
    const url = `${this.conferenceUrl}/list`;
    return this.httpClient.get<HttpResponse<any>>(url);
  }

  getConference(id: number): Observable<HttpResponse<any>>{
    const url = `${this.conferenceUrl}/${id}`;
    return this.httpClient.get<HttpResponse<any>>(url);
  }
}
