import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CSStatsClientService {
  constructor(private http: HttpClient) {}

  getMessage(): Observable<Message> {
    return this.http.get<Message>('http://localhost:3000');
  }
}
