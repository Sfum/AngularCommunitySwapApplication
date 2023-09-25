import { Injectable } from '@angular/core';
import {Category} from "../models/category";
import {tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  MOCK_URL = 'assets/json/user-data.json';

  users$ = this.httpClient
    .get<User[]>(this.MOCK_URL)
    .pipe(tap((data) => console.log('User: ', JSON.stringify)));

  constructor(private httpClient: HttpClient) {}

}
