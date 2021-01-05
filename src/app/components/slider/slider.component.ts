import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'CDBSlider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() class: string = '';
  @Input() style: string = '';
  @Input() value: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() variant:
    | 'slider-primary'
    | 'slider-secondary'
    | 'slider-success'
    | 'slider-danger'
    | 'slider-warning'
    | 'slider-info'
    | 'slider-dark'
    | 'slider-light' = 'slider-primary';
  @Input() size: 'sm' | 'lg' = 'sm';
  @Input() tooltipPlacement: 'top' | 'bottom' = 'top';
  @Input() tooltip: 'on' | 'off' | 'auto' = 'on';
  @Input() tooltipStyle: any = {};
  @Input() disabled: boolean = false;
  @Input() step: number = 1;
  @Input() onChange: Function = null;
  @Input() onAfterChange: Function = null;
  options: Options = {
    floor: this.min,
    ceil: this.max,
    disabled: this.disabled,
    step: this.step,
  };

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    let tooltip = this.elRef.nativeElement.querySelectorAll(
      '.ngx-slider-model-value'
    )[0];
    for (const [key, value] of Object.entries(this.tooltipStyle)) {
      this.renderer.setStyle(tooltip, key, value);
    }
  }

  callOnChange(e) {
    if (this.onChange !== null) {
      this.onChange(e);
    }
  }

  callAfterChange(e) {
    if (this.onAfterChange !== null) {
      this.onAfterChange(e);
    }
  }
}
