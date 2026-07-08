import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl;
  private usersRoute;

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = 'http://localhost:3003/';
    this.usersRoute = 'api/users';
   }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}${this.usersRoute}/signIn`, { username, password });
  }
}
