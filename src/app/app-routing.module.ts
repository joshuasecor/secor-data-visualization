import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { RevenueComponent } from './revenue/revenue.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';

const routes: Routes = [
  { path: '', redirectTo: '/streams', pathMatch: 'full' },
  { path: 'streams', component: ReportsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'revenue', component: RevenueComponent },
  { path: 'thoughts', component: ThoughtsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }