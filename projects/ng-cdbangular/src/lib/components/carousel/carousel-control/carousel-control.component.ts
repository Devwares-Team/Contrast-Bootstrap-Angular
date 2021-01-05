import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'CDBCarousel-control',
  templateUrl: './carousel-control.component.html',
  styleUrls: ['./carousel-control.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselControlComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() direction: string;
  @Input() multiItem: boolean;
  @Input() testimonial: boolean;
  @Input() caretClasses: string;

  @ViewChild('carouselcontrol', { static: false }) carouselcontrol: ElementRef;
  @ViewChild('caret', { static: false }) caret: ElementRef;

  @Output() onClick = new EventEmitter();
  text;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.direction === 'prev') {
      this.text = 'Previous';
    } else if (this.direction === 'next') {
      this.text = 'Next';
    }
  }
  ngAfterViewInit() {
    if (this.testimonial) {
      const arrow = this.direction === 'prev' ? 'left' : 'right';
      this.renderer.addClass(
        this.carouselcontrol.nativeElement,
        `carousel-control-${this.direction}`
      );
      this.renderer.addClass(this.carouselcontrol.nativeElement, arrow);
      this.renderer.addClass(
        this.carouselcontrol.nativeElement,
        `carousel-control`
      );
      this.renderer.addClass(
        this.caret.nativeElement,
        `icon-${this.direction}`
      );
    } else {
      this.renderer.addClass(
        this.carouselcontrol.nativeElement,
        `carousel-control-${this.direction}`
      );
      this.renderer.addClass(
        this.caret.nativeElement,
        `carousel-control-${this.direction}-icon`
      );
    }
    if (this.multiItem) {
      this.renderer.addClass(
        this.carouselcontrol.nativeElement,
        `btn-floating`
      );
    }
  }
}
