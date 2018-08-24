import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediacardComponent } from './mediacard.component';
import { CarouselModule } from '../carousel/carousel.module';

@NgModule({
  imports: [
    CommonModule, CarouselModule
  ],
  exports: [MediacardComponent],
  declarations: [MediacardComponent]
})
export class MediacardModule { }
