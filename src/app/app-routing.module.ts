import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CSStatsContainer } from './cs-stats-container/cs-stats-container.component';

const routes: Routes = [
  {
    path: '',
    component: CSStatsContainer,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
