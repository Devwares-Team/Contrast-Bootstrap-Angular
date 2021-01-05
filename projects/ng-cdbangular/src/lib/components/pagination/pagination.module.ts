import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { PagelinkComponent } from './pagelink/pagelink.component';
import { PageitemComponent } from './pageitem/pageitem.component';

@NgModule({
  declarations: [PaginationComponent, PagelinkComponent, PageitemComponent],
  imports: [CommonModule],
  exports: [PaginationComponent, PagelinkComponent, PageitemComponent],
})
export class PaginationModule {}
