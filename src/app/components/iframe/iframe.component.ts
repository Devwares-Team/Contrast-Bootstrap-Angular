import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  Renderer2,
  ElementRef,
  OnChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'CDBIframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IframeComponent implements OnInit, AfterViewInit {
  @ViewChild('iframe', { static: false }) iframe: ElementRef;

  @Input() allowfullscreen: boolean = true;
  @Input() id: string;
  @Input() name: string;
  @Input() onMouseOver: Function;
  @Input() onMouseOut: Function;
  @Input() onLoad: Function;
  @Input() sandbox: string;
  @Input() src: string;
  @Input() style: object;
  @Input() title: string = '';
  @Input() ratio: string;
  @Input() height: number;
  @Input() width: number;

  iframeAttributes: {};
  stateWidth: number;
  stateHeight: number;
  stateRatio: string = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    !(this.height || this.width) &&
      this.renderer.addClass(this.elRef.nativeElement, 'embed-responsive');
    this.renderer.addClass(this.elRef.nativeElement, 'iframe-host');

    if (this.ratio) {
      this.renderer.addClass(
        this.elRef.nativeElement,
        `embed-responsive-${this.ratio}`
      );
    } else {
      this.renderer.addClass(
        this.elRef.nativeElement,
        'embed-responsive-16by9'
      );
    }

    const ratio = this.ratio;
    let width = this.width;
    let height = this.height;
    let ratioNumber = 9 / 16;

    if (ratio) {
      const newRatio: number =
        parseFloat(this.ratio.split('by')[0]) /
        parseFloat(this.ratio.split('by')[1]);
      if (typeof ratioNumber === 'number') {
        ratioNumber = newRatio;
      }
    }

    if (width && !height) {
      height = width * ratioNumber;
    } else if (height && !width) {
      width = height * (1 / ratioNumber);
    }

    this.stateHeight = height;
    this.stateWidth = width;
    this.stateRatio = ratio;
  }

  ngAfterViewInit() {
    let iframeAttributes: {} = {
      src: this.src,
      id: this.id || false,
      frameBorder: '0',
      target: '_parent',
      ratio: this.stateRatio || '4by3',
      height: this.stateHeight || '100%',
      name: this.name || undefined,
      width: this.stateWidth || '100%',
      onLoad: this.onLoad || undefined,
      onMouseOver: this.onMouseOver || undefined,
      onMouseOut: this.onMouseOut || undefined,
      sandbox: this.sandbox || undefined,
    };
    const returnAttributes = (attributes) => {
      const newAttributesObject = Object.keys(attributes).reduce(
        (previousValue, currentElement) => {
          if (attributes[currentElement]) {
            previousValue[currentElement] = attributes[currentElement];
          }
          return previousValue;
        },
        {}
      );
      return newAttributesObject;
    };
    this.iframeAttributes = returnAttributes(iframeAttributes);

    Object.keys(this.iframeAttributes).forEach((attribute) => {
      this.renderer.setAttribute(
        this.iframe.nativeElement,
        attribute,
        this.iframeAttributes[attribute]
      );
    });
  }
}
