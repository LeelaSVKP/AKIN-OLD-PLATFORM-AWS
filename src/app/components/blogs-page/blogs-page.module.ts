import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsPageComponent } from './blogs-page.component';



@NgModule({
  declarations: [BlogsPageComponent],
  imports: [
    CommonModule
  ],
  exports: [BlogsPageComponent]
})
export class BlogsPageModule { }
