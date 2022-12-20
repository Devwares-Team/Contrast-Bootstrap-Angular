import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ElementRef,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'CDBIcon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent implements OnInit, AfterViewInit {
  @ViewChild('cdbicon', { static: false }) cdbicon: ElementRef;

  @Input() border: boolean = false;
  @Input() brand: boolean = false;
  @Input() class: string;
  @Input() style: string;
  @Input() fab: boolean = false;
  @Input() duotone: boolean = false;
  @Input() fal: boolean = false;
  @Input() fad: boolean = false;
  @Input() far: boolean = false;
  @Input() solid: boolean = false;
  @Input() fixed: boolean = false;
  @Input() fas: boolean = false;
  @Input() flip: string;
  @Input() icon: string;
  @Input() inverse: boolean = false;
  @Input() light: boolean = false;
  @Input() list: boolean = false;
  @Input() pull: string;
  @Input() pulse: boolean = false;
  @Input() regular: boolean = false;
  @Input() rotate: string;
  @Input() size: string;
  @Input() spin: boolean = false;
  @Input() stack: string;

  iconClasses = {};
  iconPrefix = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.iconPrefix =
      this.regular || this.far
        ? 'far'
        : this.solid || this.fas
        ? 'fas'
        : this.light || this.fal
        ? 'fal'
        : this.duotone || this.fad
        ? 'fad'
        : this.brand || this.fab
        ? 'fab'
        : 'fa';
    
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class')
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style')
    
  }
  ngAfterViewInit() {

    this.renderer.addClass(this.cdbicon.nativeElement, this.iconPrefix);

    if (this.size) {
      this.renderer.addClass(
        this.cdbicon.nativeElement,
        `fa-${this.size}`
      )
    }
    if (this.pull) {
      this.renderer.addClass(
        this.cdbicon.nativeElement,
        `fa-pull-${this.pull}`
      )
    }
    if (this.rotate) {
      this.renderer.addClass(
        this.cdbicon.nativeElement,
        `fa-rotate-${this.rotate}`
      )
    }
    if (this.flip) {
      this.renderer.addClass(
        this.cdbicon.nativeElement,
        `fa-flip-${this.flip}`
      )
    }
    if (this.stack) {
      this.renderer.addClass(
        this.cdbicon.nativeElement,
        `fa-${this.stack}`
      )
    }

    
    // let iconClasses: {} = {
    //   // icon: this.icon ? `fa-${this.icon}` : false,
    //   // size: this.size ? `fa-${this.size}` : false,
    //   // pull: this.pull ? `fa-pull-${this.pull}` : false,
    //   // rotate: this.rotate ? `fa-rotate-${this.rotate}` : false,
    //   // flip: this.flip ? `fa-flip-${this.flip}` : false,
    //   // stack: this.stack ? `fa-${this.stack}` : false,
    // };

    // const returnClasses = (classes) => {
    //   const newClassesObject = Object.keys(classes).reduce(
    //     (previousValue, currentElement) => {
    //       if (classes[currentElement]) {
    //         previousValue[currentElement] = classes[currentElement];
    //       }
    //       return previousValue;
    //     },
    //     {}
    //   );
    //   return newClassesObject;
    // };
    // this.iconClasses = returnClasses(iconClasses);
    // Object.keys(this.iconClasses).forEach((iconClass) => {
    //   this.renderer.addClass(
    //     this.cdbicon.nativeElement,
    //     this.iconClasses[iconClass]
    //   );
    // });
  }
}