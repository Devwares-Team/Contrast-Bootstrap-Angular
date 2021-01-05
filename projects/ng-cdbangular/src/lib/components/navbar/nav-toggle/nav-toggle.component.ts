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
  selector: 'CDBNavToggle',
  templateUrl: './nav-toggle.component.html',
  styleUrls: ['./nav-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavToggleComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string;
  @Input() image: string;
  @Input() left: boolean;
  @Input() right: boolean;
  @Input() type: string = 'button';
  imagePath: string;
  @ViewChild('navToggle', { static: false }) navToggle: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');

    if (this.image) {
      this.imagePath = `background-image: url(${this.image})`;
    }
  }

  ngAfterViewInit() {
    if (this.left === true) {
      this.renderer.addClass(
        this.navToggle.nativeElement,
        'navbar-toggler-left'
      );
    }

    if (this.right === true) {
      this.renderer.addClass(
        this.navToggle.nativeElement,
        'navbar-toggler-right'
      );
    }
  }
}
