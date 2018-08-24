import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { UserMedia, Images } from '../types/userMedia';

@Component({
  selector: 'app-mediacard',
  templateUrl: './mediacard.component.html',
  styleUrls: ['./mediacard.component.scss'],
})
export class MediacardComponent implements OnInit, DoCheck {
  constructor() {}
  @Input()
  mediaCardInputData: UserMedia;

  carouselOutputData: Array<Images>;

  ngOnInit() {
    this.carouselOutputDataFormatter();
  }

  ngDoCheck() {}

  carouselOutputDataFormatter() {
    if (this.mediaCardInputData.carousel_media) {
      this.carouselOutputData = this.mediaCardInputData.carousel_media.map(
        carousel => carousel.images
      );
    } else {
      this.carouselOutputData = new Array(this.mediaCardInputData.images);
    }
  }
}
