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
  selector: 'CDBLink',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LinkComponent implements OnInit, AfterViewInit {
  @Input() active: boolean = false;
  @Input() disabled: boolean = false;
  @Input() class: string;
  @Input() style: string;
  @Input() to: string;
  @ViewChild('link', { static: false }) link: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    if (this.disabled === true) {
      this.renderer.addClass(this.link.nativeElement, 'disabled');
    }

    if (this.active === true) {
      this.renderer.addClass(this.link.nativeElement, 'active');
    }
  }
}
