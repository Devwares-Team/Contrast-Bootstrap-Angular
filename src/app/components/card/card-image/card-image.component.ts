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
  selector: 'CDBCardImage',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardImageComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string = '';
  @Input() cascade: boolean = false;
  @Input() hover: boolean = false;
  @Input() overlay: string = 'white-slight';
  @Input() src: string;
  @Input() top: boolean;
  @Input() waves: boolean = true;
  @Input() zoom: boolean = false;

  @ViewChild('img', { static: false }) img: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    if (this.top === true) {
      this.renderer.addClass(this.img.nativeElement, 'card-img-top');
    }
  }
}
