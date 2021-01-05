import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CdbTableDirective } from '../directives/cdb-table.directive';

@Component({
  selector: 'CDBTable-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TablePaginationComponent implements OnInit {
  @Input() tableEl: CdbTableDirective;

  numberOfPages() {
    return Math.ceil(
      this.tableEl.getDataSource().length / this.tableEl.getEntries()
    );
  }

  pagesArray() {
    let pages = [];
    for (let i = 0; i < this.numberOfPages(); i++) {
      pages.push(i);
    }
    return pages;
  }

  changeActivePage(page) {
    if (!(page < 0 || page > this.pagesArray().length - 1)) {
      this.tableEl.changeActivePage(page);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
