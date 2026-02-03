// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CreateUserRequest {
  full_name: string;
  email: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/user/create';

  constructor(private http: HttpClient) {}

  createUser(user: CreateUserRequest): Observable<string> {
    return this.http.post(this.apiUrl, user, { responseType: 'text' });
  }
}

