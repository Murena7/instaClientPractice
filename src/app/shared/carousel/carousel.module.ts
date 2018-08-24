import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CarouselComponent],
  declarations: [CarouselComponent]
})
export class CarouselModule { }
