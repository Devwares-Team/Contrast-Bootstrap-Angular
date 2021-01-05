import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListgroupComponent } from './listgroup.component';
import { ListgroupitemComponent } from './listgroupitem/listgroupitem.component';
import { LinkModule } from './../link/link.module';

@NgModule({
  declarations: [ListgroupComponent, ListgroupitemComponent],
  imports: [CommonModule, LinkModule],
  exports: [ListgroupComponent, ListgroupitemComponent],
})
export class ListgroupModule {}
