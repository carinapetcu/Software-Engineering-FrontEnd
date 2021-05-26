import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Conference} from '../domain/conference.model';

@Injectable()
export class ConferenceService{
  private conferenceUrl = 'http://localhost:8080/conference';

  constructor(private httpClient: HttpClient) {
  }

  getConferences(): Observable<HttpResponse<any>>{
    const url = `${this.conferenceUrl}` + 's';
    return this.httpClient.get<HttpResponse<any>>(url);
  }

  getConference(id: number): Observable<HttpResponse<any>>{
    const url = `${this.conferenceUrl}/${id}`;
    return this.httpClient.get<HttpResponse<any>>(url);
  }

  addConference(conference: Conference): Observable<HttpResponse<any>>{
    return this.httpClient.post<HttpResponse<any>>(this.conferenceUrl, conference);
  }
}


// @PostMapping("/conference")
// public ResponseEntity<?> createConference(@RequestBody ConferenceRequest req) {
//   try {
//     var conferenceId = service.addConference(req);
//     return new ResponseEntity<>(
//       conferenceId,
//       HttpStatus.CREATED
//     );
//   } catch (InvalidIDException e) {
//     return new ResponseEntity<>(
//       e.getMessage(),
//       HttpStatus.BAD_REQUEST
//     );
//   } catch (ValidationException e) {
//     return new ResponseEntity<>(
//       e.getMessage(),
//       HttpStatus.UNPROCESSABLE_ENTITY
//     );
//   } catch (ServerException e) {
//     return new ResponseEntity<>(
//       e.getMessage(),
//       HttpStatus.INTERNAL_SERVER_ERROR
//     );
//   }
//
// }
