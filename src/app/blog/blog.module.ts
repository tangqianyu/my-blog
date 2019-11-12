import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { RewardComponent } from './reward/reward.component';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ToolsComponent } from './tools/tools.component';
import { LabelComponent } from './label/label.component';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: '首页'
        }
      },

      {
        path: 'tools',
        loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule)
      },

      {
        path: 'post',
        loadChildren: () => import('./post/post.module').then(m => m.PostModule)
      },

      {
        path: 'about',
        component: AboutComponent
      },

      {
        path: 'category',
        component: CategoryComponent
      },

      {
        path: 'label',
        component: LabelComponent
      },

      {
        path: 'reward',
        component: RewardComponent
      }
    ]
  },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PostListComponent,
    PaginationComponent,

    HomeComponent,
    AboutComponent,
    CategoryComponent,
    LabelComponent,
    RewardComponent,
    BlogComponent,

  ]
})
export class BlogModule { }
