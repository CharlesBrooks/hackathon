import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CSStatsContainerService } from './cs-stats-container/cs-stats-container.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CSStatsContainerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
