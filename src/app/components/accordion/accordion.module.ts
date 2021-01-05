import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionitemComponent } from './accordionitem/accordionitem.component';

@NgModule({
  declarations: [AccordionComponent, AccordionitemComponent],
  imports: [CommonModule],
  exports: [AccordionComponent, AccordionitemComponent],
})
export class AccordionModule {}
