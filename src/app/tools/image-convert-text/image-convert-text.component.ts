import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'image-convert-text',
  templateUrl: './image-convert-text.component.html',
  styleUrls: ['./image-convert-text.component.scss']
})
export class ImageConvertTextComponent implements OnInit {

  @ViewChild('photo', { static: false })
  photo: ElementRef



  constructor(
    private render2: Renderer2
  ) {

  }

  ngOnInit() {
  }

  fileChange(e) {
    let files = e.srcElement.files
    /* 展示预览图片 */
    for (let item of files) {
      let addDiv = this.render2.createElement('div')
      let addImg = this.render2.createElement('img')
      this.render2.addClass(addImg, 'qy_addImg')
      this.render2.setAttribute(addImg, 'src', window.URL.createObjectURL(item))
      this.render2.appendChild(addDiv, addImg)
      this.render2.appendChild(this.photo.nativeElement, addDiv)
    }
  }

}
