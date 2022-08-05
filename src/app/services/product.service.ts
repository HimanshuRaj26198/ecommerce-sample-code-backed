import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(page: number) {
    return this.http.get(`http://localhost:3000?page=${page}&limit=30`);
  }

  getOne(id: string) {
    return this.http.get(`http://localhost:3000/${id}`);
  }
}
