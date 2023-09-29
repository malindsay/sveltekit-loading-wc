import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadMoreComponent } from './read-more.component';
import { ReadMoreRoutingModule } from './read-more-routing.module';


@NgModule({
  declarations: [
    ReadMoreComponent
  ],
  imports: [
    CommonModule,
    ReadMoreRoutingModule
  ]
})
export class ReadMoreModule { }
