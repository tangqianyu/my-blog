import { Injectable, Renderer2 } from '@angular/core';
import { qyBrowserUtils } from '../utils/qy-browser.util';


@Injectable({
  providedIn: 'root'
})
export class CopyService {
  private renderer: Renderer2

  constructor(
  ) { }

  copy(text: string) {
    const input: HTMLInputElement = this.renderer.createElement('input')
    this.renderer.setAttribute(input, 'readonly', 'readonly')
    this.renderer.setAttribute(input, 'value', text)
    this.renderer.appendChild(document.body, input)

    if (qyBrowserUtils.isIos) {
      input.setSelectionRange(0, 9999);
    } else {
      input.select()
    }
    if (document.execCommand('copy')) {
      console.log('复制成功!');
    }
    this.renderer.removeChild(document.body, input)
  }

}
