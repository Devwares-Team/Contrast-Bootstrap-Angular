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

@Component({
  selector: 'CDBNavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @Input() isCollapsed: boolean = false;
  @Input() expand: boolean | string = false;
  @Input() light: boolean;
  @Input() dark: boolean;
  @Input() sticky: string;
  @Input() fixed: string;
  @Input() scrolling: boolean = false;
  @Input() color: string;
  @Input() class: string;
  @Input() style: string;
  @Input() scrollingNavbarOffset: number;
  @Input() double: boolean;
  @Input() transparent: boolean;

  @ViewChild('nav', { static: false }) nav: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');

    if (this.scrolling === true || this.scrollingNavbarOffset) {
      window.addEventListener('scroll', this.handleScroll);
    }

    // if (this.scrolling === true || this.scrollingNavbarOffset) {
    //   window.removeEventListener('scroll', this.handleScroll);
    // }
  }

  ngAfterViewInit() {
    if (this.color) {
      this.renderer.addClass(this.nav.nativeElement, this.color);
    }

    if (this.light === true) {
      this.renderer.addClass(this.nav.nativeElement, 'navbar-light');
    }

    if (this.dark === true) {
      this.renderer.addClass(this.nav.nativeElement, 'navbar-dark');
    }

    if (this.sticky) {
      this.renderer.addClass(this.nav.nativeElement, `sticky-${this.sticky}`);
    }

    if (this.fixed) {
      this.renderer.addClass(this.nav.nativeElement, `fixed-${this.fixed}`);
    }

    if (this.scrolling === true || this.scrollingNavbarOffset) {
      this.renderer.addClass(this.nav.nativeElement, 'scrolling-navbar');
    }

    if (this.double === true) {
      this.renderer.addClass(this.nav.nativeElement, 'double-nav');
    }

    if (this.isCollapsed === true) {
      this.renderer.addClass(this.nav.nativeElement, 'top-nav-collapse');
    }

    if (this.expand === true || this.expand === 'xs') {
      this.renderer.addClass(this.nav.nativeElement, 'navbar-expand');
    } else if (
      this.expand === 'sm' ||
      this.expand === 'md' ||
      this.expand === 'lg' ||
      this.expand === 'xl'
    ) {
      this.renderer.addClass(
        this.nav.nativeElement,
        `navbar-expand-${this.expand}`
      );
    }
  }

  handleScroll() {
    const scrollingNavbarOffset = this.scrollingNavbarOffset || 50;
    if (window.pageYOffset > scrollingNavbarOffset) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
  }
}
