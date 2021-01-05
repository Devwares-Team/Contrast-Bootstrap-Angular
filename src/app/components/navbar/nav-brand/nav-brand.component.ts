import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { LinkComponent } from '../../link/link.component';

@Component({
  selector: 'CDBNavBrand',
  templateUrl: './nav-brand.component.html',
  styleUrls: ['./nav-brand.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavBrandComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string;
  @Input() href: string;
  @ViewChild('navBrand1', { static: false }) navBrand1: LinkComponent;
  @ViewChild('navBrand2', { static: false }) navBrand2: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    if (this.href) {
      // this.navBrand1.class = 'navbar-brand';
      this.renderer.addClass(this.navBrand1.link.nativeElement, 'navbar-brand');
    } else {
      this.renderer.addClass(this.navBrand2.nativeElement, 'navbar-brand');
    }
  }
}
