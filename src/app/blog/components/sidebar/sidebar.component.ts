import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { BrowserUtils } from 'src/app/utils/browser.util';
import { fromEvent, interval } from 'rxjs';
import { debounceTime, throttle } from 'rxjs/operators';

@Component({
  selector: 'qy-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebar', { static: false }) 
  sidebar:ElementRef

  heightRate: number = 0

  constructor() { }

  ngOnInit() {
    fromEvent(window, 'scroll').pipe(
      debounceTime(50),
      throttle(ev => interval(50))
    ).subscribe(res => {
      this.calHeightRate()
    })
  }

  ngAfterViewInit(): void {

  }

  calHeightRate() {
    let validHeight = BrowserUtils.getScrollHeight() - BrowserUtils.getClientHeight()
    /* 百分比 */
    this.heightRate = Math.ceil(BrowserUtils.getScrollTop() / validHeight * 100)
  }

  toTop() {
    window.scrollTo({ top: 0 })
  }

  handerSiderbar() {
    
  }

}
