
export class qyBrowserUtils {
  private static _u = navigator.userAgent

  static get isMoblie(): boolean {
    return this._u.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null
  }

  static get isIos(): boolean {
    return !!this._u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  }
  static get isAndroid(): boolean {
    return this._u.indexOf('Android') > -1 || this._u.indexOf('Adr') > -1 //android终端
  }

  static get isWechat(): boolean {
    return this._u.toLocaleLowerCase().indexOf('micromessenger') != -1
  }

  static getElementToPageTop(el: HTMLElement): number {
    /* 获取元素距离页面顶部的距离 el:nativeElement */
    if (el.parentElement) {
      return this.getElementToPageTop(el.parentElement) + el.offsetTop
    }
    return el.offsetTop
  }

  static getScrollTop(): number {
    /* 获取页面滚动条卷曲高度 */
    return document.body.scrollTop || document.documentElement.scrollTop
  }

  static getScrollHeight(): number {
    /* 获取文档内容实际高度 */
    return document.body.scrollHeight || document.documentElement.scrollHeight
  }

  static getClientHeight(): number {
    /* 获取可视高度 */
    return window.innerHeight || document.documentElement.clientHeight
  }

}