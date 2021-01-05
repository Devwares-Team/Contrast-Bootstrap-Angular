import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'CDBDropDownItem',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownItemComponent implements OnInit {
  @Input() class: string;
  @Input() style: string;
  @Input() active: boolean = false;
  @Input() disabled: boolean = false;
  @Input() divider: boolean = false;
  @Input() header: boolean = false;
  @Input() toggle: boolean = true;
  tabindex: number = 0;
  @ViewChild('dropdownItem') dropdownItem: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');

    if (this.divider || this.header || this.disabled === true) {
      this.tabindex = -1;
    }
  }

  ngAfterViewInit() {
    if (this.active === true) {
      this.renderer.addClass(this.dropdownItem.nativeElement, 'active');
    }

    if (this.disabled === true) {
      this.renderer.addClass(this.dropdownItem.nativeElement, 'disabled');
    }

    if (this.divider || this.header === false) {
      this.renderer.addClass(this.dropdownItem.nativeElement, 'dropdown-item');
    }

    if (this.divider === true) {
      this.renderer.removeClass(
        this.dropdownItem.nativeElement,
        'dropdown-item'
      );
      this.renderer.addClass(
        this.dropdownItem.nativeElement,
        'dropdown-divider'
      );
    }

    if (this.header === true) {
      this.renderer.removeClass(
        this.dropdownItem.nativeElement,
        'dropdown-item'
      );
      this.renderer.addClass(
        this.dropdownItem.nativeElement,
        'dropdown-header'
      );
    }
  }
}
