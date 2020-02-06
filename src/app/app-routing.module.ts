import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { CommunicationsComponent } from './components/communications/communications.component';
import { CounterComponent } from './components/counter/counter.component';
import { ShoppingComponent } from './features/shopping/shopping.component';
import { MyDigitalLibraryComponent } from './features/my-digital-library/my-digital-library.component';


const routes: Routes = [
  {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
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
    path: 'library',
    component: MyDigitalLibraryComponent
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
