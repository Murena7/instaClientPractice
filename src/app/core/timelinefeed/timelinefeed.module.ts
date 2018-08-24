import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelinefeedComponent } from './timelinefeed.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [TimelinefeedComponent],
  declarations: [TimelinefeedComponent],
})
export class TimelinefeedModule {}
