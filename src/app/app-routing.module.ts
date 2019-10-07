import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  },

  {
    path: 'blog',
    component: BlogComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
