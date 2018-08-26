import { Component, OnInit, Input } from '@angular/core';
import { Images } from '../types/userMedia';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  buttonLeft: boolean;
  buttonRight: boolean;
  carouselNavigate = {
    xValue: 0,
    style: '',
    position: 1
  };
  carouselBoxPudding: string = undefined;
  carouselInputData: Array<Images> = undefined;

  constructor() {}
  @Input() set carouselInputFunction(value: Array<Images>) {
    this.carouselInputData = value;
    this.carouselBoxPudding = `${Math.round((value[0].standard_resolution.height / value[0].standard_resolution.width) * 100).toFixed(2)}%`;
    console.log(this.carouselBoxPudding);
    if (this.carouselInputData.length > 1) {
      this.buttonRight = true;
      this.carouselNavigate.xValue = 0;
      this.carouselNavigate.style = `translateX(${this.carouselNavigate.xValue}%)`;
      this.carouselNavigate.position = 1;
    }
  }

  ngOnInit() {

  }

  public moveCarousel(moveSide) {
    const moveStep = 100;
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
