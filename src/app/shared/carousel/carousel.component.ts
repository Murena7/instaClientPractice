import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Images } from '../types/userMedia';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, DoCheck {
  buttonLeft: boolean;
  buttonRight: boolean;
  carouselNavigate = {
    xValue: 0,
    style: '',
    position: 1
  };

  constructor() {}
  @Input() carouselInputData: Array<Images>;

  ngOnInit() {
    if (this.carouselInputData.length > 1) {
      this.buttonRight = true;
      this.carouselNavigate.xValue = 0;
      this.carouselNavigate.style = `translateX(${this.carouselNavigate.xValue}%)`;
      this.carouselNavigate.position = 1;
    }
  }

  ngDoCheck() {

  }

  public moveCarousel(moveSide) {
    const moveStep = 100 / this.carouselInputData.length;
    if (moveSide) {
      this.carouselNavigate.xValue -= moveStep;
      this.carouselNavigate.position += 1;
    } else {
      this.carouselNavigate.xValue += moveStep;
      this.carouselNavigate.position -= 1;
    }
    this.buttonLeft = (this.carouselNavigate.position > 1) ? true : false;
    this.buttonRight = (this.carouselNavigate.position < this.carouselInputData.length) ? true : false;
    this.carouselNavigate.style = `translateX(${this.carouselNavigate.xValue}%)`;
  }
}
