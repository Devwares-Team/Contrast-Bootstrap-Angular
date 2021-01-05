import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'CDBSpinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SpinnerComponent implements OnInit, AfterViewInit {
  @Input() color:
    | ''
    | 'warning'
    | 'success'
    | 'secondary'
    | 'dark'
    | 'danger'
    | 'info' = '';
  @Input() size: '' | 'big' | 'small' = '';
  @Input() multicolor: boolean = false;
  @Input() class: string;
  @Input() style: string;

  @ViewChild('circle', { static: false }) circle: ElementRef;
  @ViewChild('svg', { static: false }) svg: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    if (this.class) {
      let classes = this.class.split(' ');
      classes.forEach((className) => {
        this.renderer.addClass(this.circle.nativeElement, className);
      });
    }

    this.renderer.addClass(this.svg.nativeElement, 'spinner');

    if (this.color) {
      this.renderer.addClass(this.circle.nativeElement, this.color);
    }

    if (this.multicolor) {
      this.renderer.addClass(this.circle.nativeElement, 'multicolor');
    }

    let sizeValue =
      this.size === 'big' ? '100px' : this.size === 'small' ? '30px' : '65px';
    this.renderer.setAttribute(this.svg.nativeElement, 'width', sizeValue);
    this.renderer.setAttribute(this.svg.nativeElement, 'height', sizeValue);
  }
}
