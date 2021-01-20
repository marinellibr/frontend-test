import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardFormComponent } from './card-form/card-form.component';

const routes: Routes = [
  {path: 'payment', component: CardFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
