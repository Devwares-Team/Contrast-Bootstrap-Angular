import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { CdbTableScrollDirective } from './directives/cdb-table-scroll.directive';
import { CdbTableSortDirective } from './directives/cdb-table-sort.directive';
import { CdbTableDirective } from './directives/cdb-table.directive';
import { TableDirective } from './directives/table.directive';
import { PaginationModule } from './../pagination/pagination.module';

@NgModule({
  declarations: [
    TableComponent,
    TablePaginationComponent,
    CdbTableScrollDirective,
    CdbTableSortDirective,
    CdbTableDirective,
    TableDirective,
  ],
  imports: [CommonModule, PaginationModule],
  exports: [
    TableComponent,
    TablePaginationComponent,
    CdbTableScrollDirective,
    CdbTableSortDirective,
    CdbTableDirective,
    TableDirective,
  ],
})
export class TableModule {}
