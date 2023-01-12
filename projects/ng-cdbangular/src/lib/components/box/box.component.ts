import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'CDBBox',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BoxComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string;
  @Input() alignContent: string;
  @Input() alignItems: string;
  @Input() alignSelf: string;
  @Input() bg:
    | ''
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark' = '';
  @Input() color: string;
  @Input() display: string;
  @Input() flex: string;
  @Input() justifyContent: string;
  @Input() m: number;
  @Input() mb: number;
  @Input() ml: number;
  @Input() mr: number;
  @Input() mt: number;
  @Input() mx: number;
  @Input() my: number;
  @Input() p: number;
  @Input() pb: number;
  @Input() pl: number;
  @Input() pr: number;
  @Input() pt: number;
  @Input() px: number;
  @Input() py: number;
  @Input() tag: string = 'div';

  @ViewChild('box') box: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    if (this.display) {
      this.renderer.addClass(this.box.nativeElement, `d-${this.display}`);
    }

    if (this.justifyContent) {
      this.renderer.addClass(
        this.box.nativeElement,
        `justify-content-${this.justifyContent}`
      );
    }

    if (this.alignItems) {
      this.renderer.addClass(
        this.box.nativeElement,
        `align-items-${this.alignItems}`
      );
    }

    if (this.alignContent) {
      this.renderer.addClass(
        this.box.nativeElement,
        `align-content-${this.alignContent}`
      );
    }

    if (this.alignSelf) {
      this.renderer.addClass(
        this.box.nativeElement,
        `align-self-${this.alignSelf}`
      );
    }

    if (this.flex) {
      this.renderer.addClass(this.box.nativeElement, `flex-${this.flex}`);
    }

    if (this.color) {
      this.renderer.addClass(this.box.nativeElement, `text-${this.color}`);
      this.renderer.setStyle(this.box.nativeElement, "color", this.color)
    }

    if (this.bg) {
      this.renderer.addClass(this.box.nativeElement, `${this.bg}`);
    }
  }
}
