import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DetailsComponent } from './details.component';


const routes: Routes = [
  {
    path: '',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    //RouterTestingModule.withRoutes(routes)

],
  exports: [
    RouterModule
    //RouterTestingModule
]
})
export class DetailsRoutingModule { }