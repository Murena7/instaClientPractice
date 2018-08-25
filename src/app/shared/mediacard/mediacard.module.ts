import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediacardComponent } from './mediacard.component';
import { CarouselModule } from '../carousel/carousel.module';
import { MultiButtonModule } from '../multi-button/multi-button.module';

@NgModule({
  imports: [
    CommonModule, CarouselModule, MultiButtonModule
  ],
  exports: [MediacardComponent],
  declarations: [MediacardComponent]
})
export class MediacardModule { }
