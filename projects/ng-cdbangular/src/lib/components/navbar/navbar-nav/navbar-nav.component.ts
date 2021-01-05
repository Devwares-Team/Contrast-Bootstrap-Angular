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
  selector: 'CDBNavbarNav',
  templateUrl: './navbar-nav.component.html',
  styleUrls: ['./navbar-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarNavComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string;
  @Input() left: boolean = false;
  @Input() right: boolean = false;
  @ViewChild('navbarNav', { static: false }) navbarNav: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    if (this.left === true) {
      this.renderer.addClass(this.elRef.nativeElement, 'mr-auto');
    } else {
      this.renderer.addClass(
        this.elRef.nativeElement,
        'justify-content-around'
      );
      this.renderer.addClass(this.navbarNav.nativeElement, 'w-100');
    }

    if (this.right === true) {
      this.renderer.addClass(this.elRef.nativeElement, 'ml-auto');
    }
  }
}
