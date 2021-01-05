import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { CdbTableDirective } from '../directives/cdb-table.directive';

@Directive({
  selector: '[CdbTableSort]'
})
export class CdbTableSortDirective {

  @Output() sortEnd: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Input() tableEl: CdbTableDirective;
  @Input('CdbTableSort') dataSource: Array<any> = [];
  @Input() sortBy: string;
  @Input() enableSort: string;
  direction = 'asc'
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onclick() {
    if (this.enableSort === 'enabled') {
      this.sortData(this.trimWhiteSigns(this.sortBy.toString().toLowerCase()))
    }
  }

  trimWhiteSigns(str: any): string {
    return str.replace(/ /g, '');
  }

  sortData(key) {
    this.dataSource.sort((a, b) => {
      return this.direction === "asc"
        ? a[key] < b[key]
          ? -1
          : 1
        : a[key] > b[key]
        ? -1
        : 1;
    })
    this.tableEl.setDataSource(this.dataSource)
    this.tableEl.setPages()
    this.sortEnd.emit()
    this.direction = this.direction === 'asc' ? 'dsc' : 'asc'
  }
}
