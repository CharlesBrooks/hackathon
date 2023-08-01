import { Component, OnInit } from '@angular/core';
import { CSStatsContainerService } from './cs-stats-container.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cs-stats-container',
  templateUrl: './cs-stats-container.component.html',
  styleUrls: ['./cs-stats-container.component.scss'],
})
export class CSStatsContainer implements OnInit {
  message$!: Observable<Object>;
  constructor(private readonly service: CSStatsContainerService) {}

  ngOnInit(): void {
    this.message$ = this.service.getMessage();
  }
}
