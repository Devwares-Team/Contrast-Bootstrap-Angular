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
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'CDBInputGroup',
  templateUrl: './inputgroup.component.html',
  styleUrls: ['./inputgroup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputgroupComponent implements OnInit, AfterViewInit {
  @Input() inputGroupClass: string;
  @Input() inputClass: string;
  @Input() labelClass: string;
  @Input() hint: string = '';
  @Input() type: string = 'text';
  @Input() value: number | string | boolean = '';
  @Input() size: string = 'lg';
  @Input() material: boolean = false;
  @Input() label: string;
  @Input() background: boolean = false;
  @Input() append: any;
  @Input() prepend: any;
  @Input() appendClass: string;
  @Input() prependClass: string;
  @Input() id: string;
  @Input() disabled: boolean = false;
  @Input() name: string = '';

  @ViewChild('inputGroup') inputGroup: ElementRef;
  @ViewChild('inputGroupAppend') inputGroupAppend: ElementRef;
  @ViewChild('inputGroupPrepend') inputGroupPrepend: ElementRef;
  @ViewChild('CDBInput') CDBInput: InputComponent;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    /**************** Dynamic Classes and ID  ******************/
    this.renderer.addClass(
      this.CDBInput.inputContainer.nativeElement,
      'input-group'
    );

    if (this.inputGroupClass) {
      let classes = this.inputGroupClass.split(' ');
      classes.forEach((className) => {
        this.renderer.addClass(
          this.CDBInput.inputContainer.nativeElement,
          className
        );
      });
    }

    if (this.prependClass) {
      let classes = this.prependClass.split(' ');
      classes.forEach((className) => {
        this.renderer.addClass(this.inputGroupPrepend.nativeElement, className);
      });
    }

    if (this.appendClass) {
      let classes = this.appendClass.split(' ');
      classes.forEach((className) => {
        this.renderer.addClass(this.inputGroupAppend.nativeElement, className);
      });
    }

    if (this.id) {
      this.renderer.setAttribute(
        this.CDBInput.inputContainer.nativeElement,
        'id',
        this.id
      );
    }

    /******************************************/

    /************** Input Group ***************/
    if (this.material === true) {
      this.renderer.addClass(
        this.CDBInput.inputContainer.nativeElement,
        'md-form'
      );
    }

    if (this.size) {
      this.renderer.addClass(
        this.CDBInput.inputContainer.nativeElement,
        `input-group-${this.size}`
      );
    }
    /******************************************/
  }
}
