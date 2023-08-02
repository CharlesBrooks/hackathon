import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Message } from '../types';
import { NA_TEAMS } from '../server/mockdata';

@Injectable({
  providedIn: 'root',
})
export class CSStatsClientService {
  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> {
    return this.http.get('http://localhost:3000').pipe(
      catchError((error) => {
        console.error('An error occurred:', error);
        return of({
          teamData: { teams: NA_TEAMS },
        });
      })
    );
  }
}
