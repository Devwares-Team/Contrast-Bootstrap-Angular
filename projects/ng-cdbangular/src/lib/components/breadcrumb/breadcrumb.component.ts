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
  selector: 'CDBBreadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbComponent implements OnInit, AfterViewInit {
  @Input() bold: boolean;
  @Input() light: boolean;
  @Input() circle: boolean;
  @Input() uppercase: boolean;
  @Input() class: string;
  @Input() style: string;
  @Input() color: | ''
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark' = '';
  @ViewChild('ol', { static: false }) ol: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    if (this.bold === true) {
      this.renderer.addClass(this.ol.nativeElement, 'CDBBreadcrumb-bold');
    }

    if (this.light === true) {
      this.renderer.addClass(this.ol.nativeElement, 'CDBBreadcrumb-light');
    }

    if (this.uppercase === true) {
      this.renderer.addClass(this.ol.nativeElement, 'CDBBreadcrumb-uppercase');
    }

    if (this.circle === true) {
      this.renderer.addClass(this.ol.nativeElement, 'CDBBreadcrumb-circle');
    }

    if (this.color !== "") {
      this.renderer.addClass(this.ol.nativeElement, "bg-"+this.color)
    }
  }
}
