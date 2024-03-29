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
  selector: 'CDBBtn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit, AfterViewInit {
  @Input() block: boolean;
  @Input() circle: boolean;
  @Input() color: 'primary'|'secondary'|'success'|'danger'|'dark'|'warning'|'info'|'white' | 'light' = 'primary';
  @Input() disabled: boolean = false;
  @Input() flat: boolean = false;
  @Input() size: string = 'medium';
  @Input() type: string = 'button';
  @Input() class: string;
  @Input() style: string;
  @Input() outline: boolean = false;

  @ViewChild('button', { static: false }) button: ElementRef;
  @ViewChild('buttonWrapper', { static: false }) buttonWrapper: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    this.renderer.addClass(this.button.nativeElement, this.color);
    this.renderer.addClass(this.button.nativeElement, this.size);

    if (this.outline === true) {
      this.renderer.addClass(this.button.nativeElement, 'outline');
    }

    if (this.circle === true) {
    this.renderer.addClass(this.button.nativeElement, 'circle')
    }

    if (this.flat === true) {
      this.renderer.addClass(this.button.nativeElement, 'flat');
    }

    if (this.block == true) {
      this.renderer.setStyle(this.elRef.nativeElement, 'width', '100%');
      this.renderer.addClass(this.buttonWrapper.nativeElement, 'd-grid');
    }

    if (this.size) {
      this.renderer.addClass(this.button.nativeElement, this.size);
    }
  }
}
