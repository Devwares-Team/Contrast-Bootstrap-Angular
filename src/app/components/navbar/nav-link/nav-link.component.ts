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
  selector: 'CDBNavLink',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavLinkComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string = '';
  @Input() active: boolean = false;
  @Input() disabled: boolean = false;
  @Input() link: boolean = false;
  @Input() to: string;

  @ViewChild('navLink', { static: false }) navLink: LinkComponent;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    if (this.class) {
      let classes = this.class.split(' ');
      classes.forEach((className) => {
        this.renderer.addClass(this.navLink.link.nativeElement, className);
      });
    }

    if (this.active === true) {
      this.renderer.addClass(this.navLink.link.nativeElement, 'active');
    }
  }
}
