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
  selector: 'CDBInput',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() containerClass: string;
  @Input() labelClass: string;
  @Input() id: string;
  @Input() style: string;
  @Input() label: string;
  @Input() hint: string = '';
  @Input() type: string = 'text';
  @Input() material: boolean = false;
  @Input() background: boolean = false;
  @Input() disabled: boolean = false;
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() rows: number;
  @Input() cols: number;
  @Input() value: number | string | boolean = '';
  @Input() size: string = 'lg';
  @Input() group: boolean = false;
  @Input() containerId: string;
  @Input() labelId: string;

  @ViewChild('inputContainer') inputContainer: ElementRef;
  @ViewChild('input') input: ElementRef;
  @ViewChild('inputLabel') inputLabel: ElementRef;

  /****** Input States ******/
  isFocused: boolean = false;
  isPristine: boolean = true;
  isDirty: boolean = false;
  /**** Input States End *****/

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    /***************** Setting Up Listeners **********************/
    this.input.nativeElement.addEventListener('focus', () => {
      this.onFocus(this.input.nativeElement);
    });

    this.input.nativeElement.addEventListener('blur', () => {
      this.onBlur(this.input.nativeElement);
    });

    if (this.label) {
      this.inputLabel.nativeElement.addEventListener('click', () => {
        this.input.nativeElement.focus();
      });
    }
    /****************************************************************/

    /***************** If on Init an Input value is set ****************/
    if (this.input.nativeElement.value !== '') {
      if (this.label) {
        this.renderer.addClass(this.inputLabel.nativeElement, 'active');
      }
    }
    /*******************************************************************/

    /******************** Dynamic Classes and ID ****************/
    if (this.containerClass) {
      let classes = this.containerClass.split(' ');
      classes.forEach((className) => {
        this.renderer.addClass(this.inputContainer.nativeElement, className);
      });
    }

    if (this.class) {
      let classes = this.class.split(' ');
      classes.forEach((className) => {
        this.renderer.addClass(this.input.nativeElement, className);
      });
    }

    if (this.labelClass) {
      let classes = this.labelClass.split(' ');
      classes.forEach((className) => {
        this.renderer.addClass(this.inputLabel.nativeElement, className);
      });
    }

    if (this.id) {
      this.renderer.setAttribute(this.input.nativeElement, 'id', this.id);
    }
    /*******************************************************/

    /***************** Input ****************/
    if (this.type === 'textarea') {
      if (this.material === true) {
        this.renderer.addClass(this.input.nativeElement, 'md-textarea');
        this.renderer.addClass(this.input.nativeElement, 'form-control');
      } else {
        this.renderer.addClass(this.input.nativeElement, 'form-control');
      }

      if (this.size) {
        this.renderer.addClass(
          this.input.nativeElement,
          `form-control-${this.size}`
        );
      }
    } else if (this.type === 'checkbox' || this.type === 'radio') {
      null;
    } else {
      this.renderer.addClass(this.input.nativeElement, 'form-control');

      if (this.size) {
        this.renderer.addClass(
          this.input.nativeElement,
          `form-control-${this.size}`
        );
      }
    }
    /***********************************************/

    /****************** Input Container ******************/
    if (this.type === 'checkbox' || this.type === 'radio') {
      if (this.label) {
        this.renderer.addClass(this.inputContainer.nativeElement, 'd-flex');
      } else {
        this.renderer.addClass(this.inputContainer.nativeElement, 'form-check');
      }
    } else {
      this.renderer.addClass(this.inputContainer.nativeElement, 'md-form');
    }

    if (this.group === true) {
      this.renderer.addClass(this.inputContainer.nativeElement, 'form-group');
    }

    if (this.size) {
      this.renderer.addClass(
        this.inputContainer.nativeElement,
        `form-${this.size}`
      );
    }

    if (this.background === true) {
      this.renderer.addClass(this.inputContainer.nativeElement, 'bg');
    }

    if (this.material === true) {
      null;
    } else {
      this.renderer.addClass(this.inputContainer.nativeElement, 'md-outline');
    }

    if (this.material && this.background === true) {
      this.renderer.addClass(this.inputContainer.nativeElement, 'md-bg');
    }
    /****************** Input Container End ******************/

    /****************** Label ******************/
    if (this.label) {
      if (this.disabled === true) {
        this.renderer.addClass(this.inputLabel.nativeElement, 'disabled');
      }

      if (this.type === 'checkbox' || this.type === 'radio') {
        this.renderer.addClass(
          this.inputLabel.nativeElement,
          'form-check-label'
        );
      }
    }
    /****************** Label End ******************/

    /************ Background ***********/
    if (this.background === true) {
      this.renderer.addClass(this.inputContainer.nativeElement, 'bg');
    }
    /**********************************/
  }

  onFocus(input) {
    this.isFocused = true;
    this.inputChange(input);

    if (this.label) {
      this.renderer.addClass(this.inputLabel.nativeElement, 'active');
    }
  }

  onBlur(input) {
    this.isFocused = false;
    this.inputChange(input);

    if (this.label) {
      if (input.value !== '') {
        null;
      } else {
        this.renderer.removeClass(this.inputLabel.nativeElement, 'active');
        this.isPristine = true;
      }
    }
  }

  inputChange(input) {
    if (input.value !== '') {
      this.isPristine = false;
      this.isDirty = true;
    } else {
      this.isPristine = true;
      this.isDirty = false;
    }
  }
}
