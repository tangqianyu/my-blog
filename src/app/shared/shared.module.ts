import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from './pipes/sanitize-html-pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SanitizeHtmlPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    CommonModule,

    SanitizeHtmlPipe,

  ]
})
export class SharedModule { }
