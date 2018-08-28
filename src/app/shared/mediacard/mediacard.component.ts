import { Component, OnInit, Input } from '@angular/core';
import { UserMedia, Images } from '../types/userMedia';
import { ButtonsStyle } from '../multi-button/buttonsStyle';

@Component({
  selector: 'app-mediacard',
  templateUrl: './mediacard.component.html',
  styleUrls: ['./mediacard.component.scss'],
})
export class MediacardComponent implements OnInit {
  mediaCardInputData: UserMedia;
  buttonsStyle = ButtonsStyle;

  constructor() {}
  carouselOutputData: Array<Images>;

  @Input()
  set mediaCardInputFunction(value: UserMedia) {
    this.mediaCardInputData = value;
    this.carouselOutputDataFormatter();
    console.log(this.mediaCardInputData);
  }

  ngOnInit() {}

  carouselOutputDataFormatter() {
    if (this.mediaCardInputData.carousel_media) {
      this.carouselOutputData = this.mediaCardInputData.carousel_media.map(
        carousel => carousel.images
      );
    } else {
      this.carouselOutputData = new Array(this.mediaCardInputData.images);
    }
  }

  getTimeDifference() {
    const tempTime = parseInt(this.mediaCardInputData.created_time, 10) * 1000;
    const createdTime = new Date(tempTime);
    return `${createdTime.getDate()}.${createdTime.getMonth() + 1}.${createdTime.getFullYear()}`;
  }
}
