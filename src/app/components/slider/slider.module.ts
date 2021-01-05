import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [SliderComponent],
  imports: [CommonModule, NgxSliderModule],
  exports: [SliderComponent],
})
export class SliderModule {}
