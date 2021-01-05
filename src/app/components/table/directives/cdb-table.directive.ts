import { AfterViewInit, Component, Directive, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: '[CdbTable]',
  exportAs: 'CdbTable',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
})
export class CdbTableDirective implements OnInit {
  @Input()
  @HostBinding('class.table-striped')
  striped: boolean;

  @Input()
  @HostBinding('class.w-auto')
  autoWidth: boolean;

  @Input()
  @HostBinding('class.table-bordered')
  bordered: boolean;

  @Input()
  @HostBinding('class.table-borderless')
  borderless: boolean;

  @Input()
  @HostBinding('class.btn-table')
  btn: boolean;

  @Input()
  @HostBinding('class.table-fixed')
  fixed: boolean;

  @Input()
  @HostBinding('class.table-hover')
  hoverable: boolean;

  @Input()
  @HostBinding('class.table-sm')
  small: boolean;

  @Input()
  @HostBinding('class.table-responsive')
  responsive: boolean;
  
  @Input() entries = 5;
  _activePage = new BehaviorSubject(0)
  activePage;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private _dataSource: any = [];
  private _entries = 5;

  pages: any[] = [];

  setDataSource(data) {
    this._dataSource = data
  }

  getDataSource() {
    return this._dataSource;
  }

  setEntries(num) {
    this._entries = num
  }

  getEntries() {
    return this._entries;
  }

  getPages() {
    return this.pages;
  }

  setPages() {
    this.paginateRows()
  }

  changeActivePage(page) {
    this._activePage.next(page)
  }

  getActivePage(){
    return this.activePage
  }

  filterData(searchKey) {
    this.changeActivePage(0)
    return this.getDataSource().filter((data) => {
      return Object.keys(data).some((key: any) => {
        if (data[key]) {
          return JSON.stringify(data)
            .toLowerCase()
            .includes(searchKey) as any;
        }
      });
    })
  }

  

  numberOfPages() {
    return Math.ceil(this.getDataSource().length / this.getEntries());
  }

  
  paginateRows = () => {
    let pages = []
    const pagesAmount = this.numberOfPages();
    for (let i = 1; i <= pagesAmount; i++) {
      const pageEndIndex = i * this.getEntries();
      pages.push(this.getDataSource().slice(pageEndIndex - this.getEntries(), pageEndIndex));
    }
    this.pages = pages
  };


  ngOnInit() {
    this._activePage.subscribe(data => {
      this.activePage = data
    })
    this.renderer.addClass(this.el.nativeElement, 'table');
    // this.paginateRowsInitialy()
  }
  
}

