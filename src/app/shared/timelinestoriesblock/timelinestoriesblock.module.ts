import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelinestoriesblockComponent } from './timelinestoriesblock.component';
import { MiniuserblockModule } from '../miniuserblock/miniuserblock.module';

@NgModule({
  imports: [
    CommonModule, MiniuserblockModule
  ],
  exports: [TimelinestoriesblockComponent],
  declarations: [TimelinestoriesblockComponent]
})
export class TimelinestoriesblockModule { }
