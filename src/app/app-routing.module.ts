import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pag1Component} from './pag1/pag1.component';
import { Pag2Component} from './pag2/pag2.component'

//router component
const routes1: Routes = [
  { path: '', redirectTo: '/app.component', pathMatch: 'full' },
  { path: 'pag2', component: Pag2Component },
  { path: 'pag1', component: Pag1Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes1)],
            
  exports: [RouterModule]
})
export class AppRoutingModule { }