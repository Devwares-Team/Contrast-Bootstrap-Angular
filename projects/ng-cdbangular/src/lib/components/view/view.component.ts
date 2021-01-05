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
  selector: 'CDBView',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() fixed: boolean;
  @Input() hover: boolean = false;
  @Input() rounded: boolean = false;
  @Input() waves: boolean = false;
  @Input() zoom: boolean = false;
  @Input() cascade: boolean = false;
  @Input() src: string = '';
  style: string = '';

  @ViewChild('view', { static: false }) view: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    if (this.src !== '') {
      const BA = this.fixed === true ? 'background-attachment: fixed;' : '';
      const BI = `background-image: url("${this.src}");`;
      const BP = 'background-position: center center;';
      const BR = 'background-repeat: no-repeat;';
      const BS = 'background-size: cover;';
      const height = 'height: 100vh;';

      this.style = BA + BI + BP + BR + BS + height;
    }
  }

  ngAfterViewInit() {
    if (this.rounded === true) {
      this.renderer.addClass(this.view.nativeElement, 'CDBView-rounded');
    }

    if (this.hover === true) {
      this.renderer.addClass(this.view.nativeElement, 'CDBView-hover');
    }

    if (this.waves === true) {
      this.renderer.addClass(this.view.nativeElement, 'Ripple-parent');
    }

    if (this.zoom === true) {
      this.renderer.addClass(this.view.nativeElement, 'CDBView-zoom');
    }
  }
}
