import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageConvertTextComponent } from './image-convert-text/image-convert-text.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: 'image-convert-text',
    component: ImageConvertTextComponent,
    data: {
      title: '图片转文字'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    ImageConvertTextComponent
  ]
})
export class ToolsModule { }
