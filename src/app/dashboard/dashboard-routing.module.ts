import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DasboardResolveService } from '../shared/resolve/dasboard-resolve.service';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, resolve: { dashboard: DasboardResolveService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
