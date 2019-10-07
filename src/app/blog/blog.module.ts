import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: '首页'
    }
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'tools',
    loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule)
  },

  {
    path: 'post-detail',
    component: PostDetailComponent
  }

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostDetailComponent,
    PostListComponent,
   
  ]
})
export class BlogModule { }
