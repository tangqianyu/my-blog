import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageConvertTextComponent } from './image-convert-text/image-convert-text.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToolsComponent } from './tools.component';

const routes: Routes = [

  {
    path: '',
    component: ToolsComponent
  },

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
    ToolsComponent,
    ImageConvertTextComponent
  ]
})
export class ToolsModule { }
