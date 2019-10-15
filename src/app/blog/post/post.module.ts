import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostIndexComponent } from './post-index/post-index.component';

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
		CommonModule,
		RouterModule.forChild(routes),
	],
	declarations: [
		PostDetailComponent,
		PostIndexComponent
	]
})
export class PostModule { }