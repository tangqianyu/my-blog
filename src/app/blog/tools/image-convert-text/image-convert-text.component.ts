import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef, RendererFactory2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'image-convert-text',
  templateUrl: './image-convert-text.component.html',
  styleUrls: ['./image-convert-text.component.scss']
})
export class ImageConvertTextComponent implements OnInit {

  @ViewChild('photo', { static: false })
  photo: ElementRef
  images: Array<string>


  constructor(
    private render2: Renderer2,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.http.post('http://192.168.101.106:3000/tools/imgToText',{
      test:'123'
    }).subscribe(res => {
      console.log(res);
    })
  }

  fileChange(e) {
    let files = e.srcElement.files
    /* 展示预览图片 */
    for (let item of files) {
      let addDiv = this.render2.createElement('div')
      let addImg = this.render2.createElement('img')
      let tempSrc = window.URL.createObjectURL(item) //图片的临时路径
      this.images.push(item)
      this.render2.addClass(addImg, 'qy_addImg')
      this.render2.setAttribute(addImg, 'src', tempSrc)
      this.render2.appendChild(addDiv, addImg)
      this.render2.appendChild(this.photo.nativeElement, addDiv)
    }
  }

  convert() {
    
  }


}
