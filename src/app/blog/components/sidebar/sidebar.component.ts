import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { qyBrowserUtils } from 'src/app/utils/qy-browser.util';
import { fromEvent, interval, Subscription } from 'rxjs';
import { debounceTime, throttle } from 'rxjs/operators';

@Component({
  selector: 'qy-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sidebar', { static: false })
  sidebar: ElementRef

  heightRate: number = 0
  subscribeScoll: Subscription
  toTopheight: number = 0 //距离顶部的高度
  elementHeight: number = 0 //元素的高度

  constructor(
    private render2: Renderer2
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.toTopheight = qyBrowserUtils.getElementToPageTop(this.sidebar.nativeElement)
    this.elementHeight = this.sidebar.nativeElement.offsetHeight
    this.subscribeScoll = fromEvent(window, 'scroll').pipe(
      debounceTime(50)
    ).subscribe(event => {
      this.calHeightRate()
      this.handerSiderbar()
    })

  }

  calHeightRate(): void {
    /* 有效距离 */
    let validHeight = qyBrowserUtils.getScrollHeight() - qyBrowserUtils.getClientHeight()
    /* 百分比 */
    this.heightRate = Math.floor(qyBrowserUtils.getScrollTop() / validHeight * 100)
  }

  toTop(): void {
    window.scrollTo({ top: 0 })
  }

  handerSiderbar(): void {
    let scrollTop = qyBrowserUtils.getScrollTop()

    if (scrollTop >= (this.toTopheight - this.elementHeight-20)) {
      this.render2.setStyle(this.sidebar.nativeElement, 'position', 'fixed')
      this.render2.setStyle(this.sidebar.nativeElement, 'z-index', '100')
      this.render2.setStyle(this.sidebar.nativeElement, 'top', '0')
    } else {
      this.render2.setStyle(this.sidebar.nativeElement, 'position', 'static')
    }

  }

  ngOnDestroy(): void {
    this.subscribeScoll.unsubscribe()
  }

}
