import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframeComponent } from './iframe.component';

@NgModule({
  declarations: [IframeComponent],
  imports: [CommonModule],
  exports: [IframeComponent],
})
export class IframeModule {}
