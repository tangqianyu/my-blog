import { Component, OnInit } from '@angular/core';
import { minus, toFixed, plus } from '../utils/qy-calculate.util';

@Component({
  selector: 'qy-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let a = 607.524
    let b = 288.132
    console.log(toFixed(plus(a, b),1));
    // console.log(toFixed(b,1));



  }

}
