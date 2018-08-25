import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediacardModule } from './mediacard/mediacard.module';
import { TimelinestoriesblockModule } from './timelinestoriesblock/timelinestoriesblock.module';
import { MultiButtonModule } from './multi-button/multi-button.module';

@NgModule({
  imports: [CommonModule, MediacardModule, TimelinestoriesblockModule, MultiButtonModule],
  exports: [MediacardModule, TimelinestoriesblockModule, MultiButtonModule],
  declarations: [],
})
export class SharedModule {}
