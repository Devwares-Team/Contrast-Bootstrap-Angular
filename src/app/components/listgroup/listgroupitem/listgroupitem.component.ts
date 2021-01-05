import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { LinkComponent } from '../../link/link.component';

@Component({
  selector: 'CDBListGroupItem',
  templateUrl: './listgroupitem.component.html',
  styleUrls: ['./listgroupitem.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListgroupitemComponent implements OnInit, AfterViewInit {
  // @Input() routerLink: string = '';
  @Input() href: string = '';
  @Input() class: string;
  @Input() color: string;
  @Input() active: boolean = false;
  @Input() hover: boolean = false;

  @ViewChild('li', { static: false }) li: ElementRef;
  @ViewChild('Link', { static: false }) Link: LinkComponent;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.renderer.addClass(this.elRef.nativeElement, 'list-group-item');

    if (this.href === '') {
      this.renderer.addClass(this.li.nativeElement, 'w-100');
    }

    if (this.active === true) {
      this.renderer.addClass(this.elRef.nativeElement, 'active');

      if (this.href !== '') {
        this.renderer.addClass(this.Link.link.nativeElement, 'text-white');
      } else {
        this.renderer.addClass(this.li.nativeElement, 'text-white');
      }
    }

    if (this.hover === true) {
      this.renderer.addClass(
        this.elRef.nativeElement,
        'list-group-item-action'
      );
    }

    if (this.color) {
      this.renderer.addClass(this.elRef.nativeElement, this.color);
    }
  }
}
