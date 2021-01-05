import {
  Component,
  ContentChildren,
  QueryList,
  OnInit,
  Input,
  ViewEncapsulation,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Component({
  selector: 'CDBCarousel-inner',
  templateUrl: './carousel-inner.component.html',
  styleUrls: ['./carousel-inner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselInnerComponent implements OnInit {
  @ContentChildren(CarouselItemComponent)
  carouselItems: QueryList<CarouselItemComponent>;

  @Input() active: boolean;
  @Input() class: string;
  @Input() style: string;
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit(): void {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }
}
