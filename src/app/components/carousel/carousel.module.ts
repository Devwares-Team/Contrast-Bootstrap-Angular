import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselindicatorComponent } from './carouselindicator/carouselindicator.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselInnerComponent } from './carousel-inner/carousel-inner.component';
import { CarouselControlComponent } from './carousel-control/carousel-control.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselindicatorComponent,
    CarouselItemComponent,
    CarouselInnerComponent,
    CarouselControlComponent,
  ],
  imports: [CommonModule],
  exports: [
    CarouselComponent,
    CarouselindicatorComponent,
    CarouselItemComponent,
    CarouselInnerComponent,
    CarouselControlComponent,
  ],
})
export class CarouselModule {}
