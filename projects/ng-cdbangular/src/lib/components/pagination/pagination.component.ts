import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewEncapsulation,
  ElementRef,
  Renderer2,
  QueryList,
  ContentChildren,
} from '@angular/core';
import { PageitemComponent } from './pageitem/pageitem.component';
import { PagelinkComponent } from './pagelink/pagelink.component';

@Component({
  selector: 'CDBPagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaginationComponent implements OnInit, AfterViewInit {
  @ContentChildren(PageitemComponent) pageitems: QueryList<PageitemComponent>;

  @ContentChildren(PagelinkComponent) pagelinks: QueryList<PagelinkComponent>;

  @Input() class: string;
  @Input() style: string;
  @Input() color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'white'
    | 'dark' = 'dark';
  @Input() shape: string;
  @Input() size: string;
  @Input() sm: boolean;
  @Input() circle: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    this.pageitems.forEach((element) => {
      this.renderer.addClass(element.pageitem.nativeElement, this.color);
    });

    this.pagelinks.forEach((element) => {
      this.renderer.addClass(element.pagelink.nativeElement, this.color);
    });

    if (this.sm) {
      this.pageitems.forEach((element) => {
        this.renderer.addClass(element.pageitem.nativeElement, `sm`);
      });

      this.pagelinks.forEach((element) => {
        this.renderer.addClass(element.pagelink.nativeElement, `sm`);
      });

      //  this.renderer.addClass(this.pagelink.nativeElement, `sm`);
    }
    if (this.circle) {
      this.pageitems.forEach((element) => {
        this.renderer.addClass(element.pageitem.nativeElement, `circle`);
      });

      this.pagelinks.forEach((element) => {
        this.renderer.addClass(element.pagelink.nativeElement, `circle`);
      });
    }
    if (this.size === 'small') {
      this.pageitems.forEach((element) => {
        this.renderer.addClass(element.pageitem.nativeElement, `small`);
      });
    }
    if (this.size === 'big') {
      this.pageitems.forEach((element) => {
        this.renderer.addClass(element.pageitem.nativeElement, `big`);
      });
    }
  }
}
