import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediacardModule } from './mediacard/mediacard.module';
import { TimelinestoriesblockModule } from './timelinestoriesblock/timelinestoriesblock.module';

@NgModule({
  imports: [CommonModule, MediacardModule, TimelinestoriesblockModule],
  exports: [MediacardModule, TimelinestoriesblockModule],
  declarations: [],
})
export class SharedModule {}
