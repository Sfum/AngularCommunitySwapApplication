import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, tap } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  registerUser(userData: User): Observable<any> {
    const API_URL = `${this.apiUrl}/register`;

    return this.http.post(API_URL, userData).pipe(
      tap(() => {
        console.log('Registration successful');
      }),
      catchError((error) => {
        console.error('Error during registration:', error);
        throw error; // Rethrow the error to propagate it
      })
    );
  }
}
