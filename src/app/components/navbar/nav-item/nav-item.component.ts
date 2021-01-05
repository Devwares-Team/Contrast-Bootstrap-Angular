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
  selector: 'CDBNavItem',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavItemComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string;
  @Input() active: boolean;
  @Input() text: boolean;

  @ViewChild('navbarItem', { static: false }) navbarItem: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    if (this.active === true) {
      this.renderer.addClass(this.navbarItem.nativeElement, 'active');
    }

    if (this.text === true) {
      this.renderer.addClass(this.navbarItem.nativeElement, 'navbar-text');
    }
  }
}
