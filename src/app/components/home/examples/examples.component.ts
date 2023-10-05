import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: '../../../../assets/images/webp/work-01.webp',
    };
    this.slides[1] = {
      src: '../../../../assets/images/webp/work-04.webp',
    }
    this.slides[2] = {
      src: '../../../../assets/images/webp/work-03.webp',
    }
  }
}
