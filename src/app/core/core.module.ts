import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { TimelinefeedModule } from './timelinefeed/timelinefeed.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    TimelinefeedModule
  ],
  exports: [NavbarModule, TimelinefeedModule],
  declarations: []
})
export class CoreModule { }
