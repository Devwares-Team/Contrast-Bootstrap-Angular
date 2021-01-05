import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputgroupComponent } from './inputgroup.component';
import { InputModule } from './../input/input.module';

@NgModule({
  declarations: [InputgroupComponent],
  imports: [CommonModule, InputModule],
  exports: [InputgroupComponent],
})
export class InputgroupModule {}
