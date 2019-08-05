import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmNoClusterComponent } from './example/agm-no-cluster/agm-no-cluster.component';

const routes: Routes = [
  { path: 'agm-no-cluster', component: AgmNoClusterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
