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
  selector: 'CDBDropDownToggle',
  templateUrl: './dropdown-toggle.component.html',
  styleUrls: ['./dropdown-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownToggleComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string;
  @Input() color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info' = 'primary';
  @Input() caretDropLeft: boolean = false;
  @Input() caretDropRight: boolean = false;
  @Input() caretDropUp: boolean = false;
  @Input() caretDropDown: boolean = false;
  @Input() size: string;
  @Input() nav: boolean;
  @Input() circle: boolean;
  @Input() disabled: boolean = false;

  @ViewChild('dropdownToggle', { static: false }) dropdownToggle: ElementRef;
  @ViewChild('arrowLeft', { static: false }) arrowLeft: ElementRef;
  @ViewChild('arrowRight', { static: false }) arrowRight: ElementRef;
  @ViewChild('arrowUp', { static: false }) arrowUp: ElementRef;
  @ViewChild('arrowDown', { static: false }) arrowDown: ElementRef;

  caretMargin;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');

    if (this.caretDropLeft === true) {
      this.caretMargin = 'mr-3';
    } else if (this.caretDropRight === true) {
      this.caretMargin = 'ml-3';
    } else if (this.caretDropUp === true) {
      this.caretMargin = 'ml-3';
    } else if (this.caretDropDown === true) {
      this.caretMargin = 'ml-3';
    }
  }

  ngAfterViewInit() {
    if (this.color) {
      this.renderer.addClass(
        this.dropdownToggle.nativeElement,
        this.color
      );
    }

    if (this.size === 'lg') {
      this.renderer.addClass(
        this.dropdownToggle.nativeElement,
        'CDBDropDownToggle-lg'
      );
    }

    if (this.size === 'sm') {
      this.renderer.addClass(
        this.dropdownToggle.nativeElement,
        'CDBDropDownToggle-sm'
      );
    }

    if (this.nav === true) {
      this.renderer.addClass(
        this.dropdownToggle.nativeElement,
        'nav-link'
      );
    }

    if (this.caretDropLeft === true) {
      this.renderer.addClass(this.arrowLeft.nativeElement, 'dropleft');
    } else if (this.caretDropRight === true) {
      this.renderer.addClass(this.arrowRight.nativeElement, 'dropright');
    } else if (this.caretDropUp === true) {
      this.renderer.addClass(this.arrowUp.nativeElement, 'dropup');
    }
  }

  toggleDropdown(event) {
    if (this.disabled || this.nav === true) {
      return;
    }
  }
}
