import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

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
export class HomeRoutingModule { }