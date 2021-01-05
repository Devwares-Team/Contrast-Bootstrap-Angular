import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'CDBCarousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselItemComponent implements OnInit {
  @Input() class: string;
  @Input() style: string;
  @Input() itemId: any;
  @Input()
  public activeItem: any;
  @Input() slide: any;

  getStyles() {
    const slideIndex = this.activeItem - this.itemId;
    if (this.slide) {
      if (slideIndex < 0) {
        return {
          position: 'absolute',
          left: '100%',
        };
      } else if (slideIndex > 0) {
        return {
          position: 'absolute',
          left: '-100%',
        };
      } else {
        return {
          left: '0',
        };
      }
    } else {
      return {
        left: '0',
      };
    }
  }

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit(): void {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }
}
