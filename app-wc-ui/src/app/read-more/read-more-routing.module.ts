import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ReadMoreComponent } from './read-more.component';


const routes: Routes = [
  {
    path: '',
    component: ReadMoreComponent
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
export class ReadMoreRoutingModule { }