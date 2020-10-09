import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, pwd: string): Promise<any> {
    return this.http.post('http://80.99.123.198:8081/api/login', {
      loginName: username,
      password: pwd
    }, {}).toPromise();
  }
}
