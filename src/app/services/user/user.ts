import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface CreateUserRequest {
  document_id: string;
  username: string;
  email: string;
  full_name: string;
  password: string;
}

export interface CreateUserResponse {
  user_id: number;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8000/auth/register';

  constructor(private http: HttpClient) {}

  createConsumidor(user: CreateUserRequest): Observable<CreateUserResponse> {
    return this.http.post<CreateUserResponse>(this.apiUrl, user).pipe(
      catchError((err) => {
        const errorMsg = err.error?.message || 'Erro ao cadastrar usuário. Tente novamente.';
        return throwError(() => new Error(errorMsg));
      }),
    );
  }
}