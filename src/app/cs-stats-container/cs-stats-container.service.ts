import { Injectable } from '@angular/core';
import { CSStatsClientService } from '../cs-stats-client-api/cs-stats-client.service';
import { Observable } from 'rxjs';
import { Message } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CSStatsContainerService {
  message$!: Observable<Object>;
  constructor(private readonly clientService: CSStatsClientService) {}

  getMessage(): Observable<Message> {
    return this.clientService.getMessage();
  }
}
