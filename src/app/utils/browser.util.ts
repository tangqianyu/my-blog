
export class BrowserUtils {

    static getElementToPageTop(el: HTMLElement) {
        /* 获取元素距离页面顶部的距离 el:nativeElement */
        if (el.parentElement) {
            return this.getElementToPageTop(el.parentElement) + el.offsetTop
        }
        return el.offsetTop
    }

    static getScrollTop() {
        /* 获取页面滚动条卷曲高度 */
        return document.body.scrollTop || document.documentElement.scrollTop
    }

    static getScrollHeight() {
        /* 获取文档内容实际高度 */
        return document.body.scrollHeight || document.documentElement.scrollHeight
    }

    static getClientHeight() {
        /* 获取可视高度 */
        return window.innerHeight || document.documentElement.clientHeight
    }

}