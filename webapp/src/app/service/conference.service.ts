import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Conference} from '../domain/conference.model';

@Injectable()
export class ConferenceService{
  private conferenceUrl = 'http://localhost:8080/conference';

  constructor(private httpClient: HttpClient) {
  }

  getConferences(): Observable<any>{
    const url = `${this.conferenceUrl}` + 's';
    return this.httpClient.get<any>(url);
  }

  getConference(id: number): Observable<any>{
    const url = `${this.conferenceUrl}/${id}`;
    return this.httpClient.get<any>(url);
  }


  addConference(conference: object): Observable<any>{
    return this.httpClient.post<any>(this.conferenceUrl, conference);
  }

  addCoChairToConference(id: number, coChair: object): Observable<any>{
    const url = `${this.conferenceUrl}/${id}/co_chair`;
    return this.httpClient.post<any>(url, coChair);
  }

  addPcMemberToConference(id: number, pcMember: object): Observable<any>{
    const url = `${this.conferenceUrl}/${id}/pc_member`;
    return this.httpClient.post<any>(url, pcMember);
  }

  getCoChairsFromConference(id: number): Observable<any>{
    const url = `${this.conferenceUrl}/${id}/co_chairs`;
    return this.httpClient.get<any>(url);
  }

  getPcMembersFromConference(id: number): Observable<any>{
    const url = `${this.conferenceUrl}/${id}/pc_members`;
    return this.httpClient.get<any>(url);
  }

  getReviewersFromConference(id: number): Observable<any>{
    const url = `${this.conferenceUrl}/${id}/reviewers`;
    return this.httpClient.get<any>(url);
  }
}
