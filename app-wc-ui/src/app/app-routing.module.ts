import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { DetailsComponent } from './details/details.component';
import { RouterTestingModule } from '@angular/router/testing';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'read-more', component: ReadMoreComponent},
  { path: 'details', component: DetailsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    //RouterTestingModule.withRoutes(routes)

  ],
  exports: [
    RouterModule,
    //RouterTestingModule
  ]
})

export class AppRoutingModule { }
