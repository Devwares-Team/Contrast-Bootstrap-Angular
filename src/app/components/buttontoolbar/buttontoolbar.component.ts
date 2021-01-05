import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'CDBBtnTb',
  templateUrl: './buttontoolbar.component.html',
  styleUrls: ['./buttontoolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtontoolbarComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.renderer.addClass(this.elRef.nativeElement, 'btn-toolbar');

    if (this.class) {
      let classes = this.class.split(' ');
      classes.forEach((className) => {
        this.renderer.addClass(this.elRef.nativeElement, className);
      });
    }
    
    this.renderer.setAttribute(this.elRef.nativeElement, 'style', this.style);
  }
}
