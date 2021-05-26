import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {CMSUser} from '../domain/cmsuser.model';
import {Observable} from 'rxjs';

@Injectable()
export class CMSUserService {
  private userUrl = 'http://localhost:8080/api/users';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {
  }


  addUser(user: CMSUser): Observable<HttpResponse<any>> {
    const url = `${this.userUrl}/add`;
    return this.httpClient.post<HttpResponse<any>>(url, user);
  }

  getUser(id: number): Observable<HttpResponse<any>> {
    const url = `${this.userUrl}/${id}`;
    return this.httpClient.get<HttpResponse<any>>(url);
  }

  login(username: string, password: string): Observable<any>{
    const url = `${this.userUrl}/login`;
    const loginInfo = {
      username,
      password
    };

    return this.httpClient.post(url, loginInfo, this.httpOptions);
  }


}

