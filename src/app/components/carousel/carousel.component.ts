import {
  Component,
  QueryList,
  AfterViewInit,
  ContentChild,
  OnInit,
  ContentChildren,
  Input,
  ViewChild,
  ElementRef,
  OnDestroy,
  ViewEncapsulation,
  Renderer2,
} from '@angular/core';

import { CarouselItemComponent } from '../carousel/carousel-item/carousel-item.component';
import { CarouselInnerComponent } from '../carousel/carousel-inner/carousel-inner.component';

@Component({
  selector: 'CDBCarousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() activeItem: number = 1;
  @Input() class: string;
  @Input() style: string;
  @Input() interval: number = 6000;
  @Input() length: number = 0;
  @Input() mobileGesture: boolean = true;
  @Input() multiItem: boolean;
  @Input() onHoverStop: boolean = true;
  @Input() showControls: boolean = true;
  @Input() showIndicators: boolean = true;
  @Input() slide: boolean;
  @Input() testimonial: boolean;
  @Input() thumbnails: boolean;

  @ContentChildren(CarouselItemComponent)
  items: QueryList<CarouselItemComponent>;
  @ContentChild(CarouselInnerComponent) inner: CarouselInnerComponent;
  @ViewChild('carouselRef', { static: false }) carouselRef: ElementRef;
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  //State variables
  state = {
    activeItem: this.activeItem,
    initialLength: this.length,
    srcArray: [],
    swipeAvailable: true,
    initialX: null,
    initialY: null,
  };

  cycleInterval: any;
  CarouselIndicatorsArray = [];
  isMultiItem;
  isTestimonial;

  clearCycleIntervalHandler = () => clearInterval(this.cycleInterval);
  swipeAvailableHandler = () => (this.state.swipeAvailable = true);
  restartInterval = () => {
    if (!!this.interval !== false) {
      this.clearCycleIntervalHandler();
      this.cycleInterval = setInterval(this.next, this.interval);
    }
  };

  next = () => {
    const { activeItem, initialLength } = this.state;
    const nextIndex = activeItem + 1;
    const nextItem = nextIndex > initialLength ? 1 : nextIndex;
    this.goToIndex(nextItem);
  };

  prev = () => {
    const { activeItem, initialLength } = this.state;
    const prevIndex = activeItem - 1;
    const prevItem = prevIndex < 1 ? initialLength : prevIndex;
    this.goToIndex(prevItem);
  };

  goToIndex = (item) => {
    (this.state.activeItem = item),
      this.inner.carouselItems.toArray().forEach((component) => {
        component.slide = true;
        component.activeItem = this.state.activeItem;
      });
    this.restartInterval();
  };

  startTouch = (e) => {
    if (this.mobileGesture !== false) {
      this.state.initialX = e.touches[0].clientX;
      this.state.initialY = e.touches[0].clientY;
    }
  };

  moveTouch = (e) => {
    this.state.swipeAvailable = false;

    const { initialX, initialY } = this.state;

    if (initialX === null || initialY === null) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const diffX = initialX - currentX;
    const diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
        this.next();
      } else {
        this.prev();
      }
    }

    this.state.initialX = null;
    this.state.initialY = null;
  };

  ngOnInit(): void {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
    let interval = this.interval;

    let oninit = () => {
      if (!!interval === false) {
        return;
      }
      this.cycleInterval = setInterval(this.next, this.interval);
      if (this.thumbnails) {
        const CarouselItemsArray = this.carouselRef.nativeElement.querySelectorAll(
          '.carousel-item img'
        );

        const srcArray = Array.prototype.map.call(
          CarouselItemsArray,
          (item) => item.src
        );
        this.state.srcArray = srcArray;
      }
      this.state.initialLength = this.length;
    };
    oninit();
    for (let i = 1; i <= this.state.initialLength; i++) {
      this.CarouselIndicatorsArray.push(i);
    }
  }

  ngAfterViewInit() {
    this.inner.carouselItems.toArray().forEach((component) => {
      setTimeout(() => {
        component.slide = true;
        component.activeItem = this.activeItem;
      }, 0);
    });
  }
  ngOnDestroy() {
    if (this.cycleInterval) {
      this.clearCycleIntervalHandler();
    }
  }
}
