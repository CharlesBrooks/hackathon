import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CSStatsContainerService } from './cs-stats-container/cs-stats-container.service';
import { CSStatsContainer } from './cs-stats-container/cs-stats-container.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CSStatsContainer],
  imports: [BrowserModule, AppRoutingModule, CommonModule, HttpClientModule],
  providers: [CSStatsContainerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
