import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
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
import { createPopper, Placement } from '@popperjs/core';

@Component({
  selector: 'CDBDropDownMenu',
  exportAs: 'cdbDropdownMenu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  animations: [
    trigger('dropdownMenu', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
          opacity: 0,
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          height: '*',
          overflow: 'visible',
        })
      ),
      transition('hidden => visible', [
        animate(
          '300ms ease',
          style({
            height: '*',
            opacity: 1,
            overflow: 'visible',
          })
        ),
      ]),
      transition('visible => hidden', [
        animate(
          '300ms ease',
          style({
            opacity: 0,
            height: '0px',
            overflow: 'hidden',
          })
        ),
      ]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownMenuComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string;
  @Input() color: string;
  @Input() placement: Placement = 'bottom';

  @ViewChild('dropdownMenu', { static: false }) dropdownMenu: ElementRef;

  popperInstance = null;
  isOpen: boolean = false;
  dropdownMenuAnimationState;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');

    if (this.isOpen === false) {
      this.dropdownMenuAnimationState = 'hidden';
    } else {
      this.dropdownMenuAnimationState = 'visible';
    }
  }

  ngAfterViewInit() {
    if (this.color) {
      this.renderer.addClass(this.dropdownMenu.nativeElement, this.color);
    }
  }

  toggleDropdown(event) {
    if (this.popperInstance === null) {
      this.initPopper(event.target);
    } else {
      this.destroyPopper();
    }
  }

  initPopper(toggler) {
    this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');

    setTimeout(() => {
      this.dropdownMenuAnimationState = 'visible';
    }, 110);

    this.popperInstance = createPopper(
      toggler,
      this.dropdownMenu.nativeElement,
      {
        // placement: `${this.placement}-start`,
        placement: this.placement,
        modifiers: [
          {
            name: 'flip',
            enabled: false,
          },
          {
            name: 'offset',
            options: {
              offset: [0, 14],
            },
          },
        ],
      }
    );
  }

  destroyPopper() {
    setTimeout(() => {
      this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
      this.popperInstance.destroy();
      this.popperInstance = null;
    }, 250);

    this.dropdownMenuAnimationState = 'hidden';
  }
}
