import { Injectable } from '@angular/core';
import {Category} from "../models/category";
import {tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  MOCK_URL = 'http://localhost:8000/category';

  categories$ = this.httpClient
    .get<Category[]>(this.MOCK_URL)
    .pipe(tap((data) => console.log('Category: ', JSON.stringify)));

  constructor(private httpClient: HttpClient) {}


}
