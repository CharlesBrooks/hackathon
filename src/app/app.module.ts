import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CSStatsContainerService } from './cs-stats-container/cs-stats-container.service';
import { CSStatsContainer } from './cs-stats-container/cs-stats-container.component';
import { HttpClientModule } from '@angular/common/http';
import { DxDataGridModule } from 'devextreme-angular';
import { CSAppHeader } from './cs-app-header/cs-app-header.component';

@NgModule({
  declarations: [AppComponent, CSStatsContainer, CSAppHeader],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    DxDataGridModule,
  ],
  providers: [CSStatsContainerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
