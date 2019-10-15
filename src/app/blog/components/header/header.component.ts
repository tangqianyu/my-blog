import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  icons = [
    {
      icon: 'icon-home',
      text: '首页',
      link: '/blog/home'
    },

    {
      icon: 'icon-about',
      text: '关于',
      link: '/blog/about'
    },

    {
      icon: 'icon-category',
      text: '分类',
      link: '/blog/category'
    },

    {
      icon: 'icon-file',
      text: '归档',
      link: '/blog/post'
    },

    {
      icon: 'icon-reward',
      text: '打赏',
      link: '/blog/reward'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
