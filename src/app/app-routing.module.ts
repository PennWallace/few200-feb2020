import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { CommunicationsComponent } from './components/communications/communications.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'tip',
    component: TipCalculatorComponent
  },
  {
    path: 'communications',
    component: CommunicationsComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
