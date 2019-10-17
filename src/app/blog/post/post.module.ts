import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostIndexComponent } from './post-index/post-index.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PostIndexComponent,
    data: {
      title: '文章列表'
    }
  },

  {
    path: 'post-detail',
    component: PostDetailComponent
  }

]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    PostDetailComponent,
    PostIndexComponent
  ]
})
export class PostModule { }