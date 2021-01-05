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
  selector: 'CDBCloseicon',
  templateUrl: './closeicon.component.html',
  styleUrls: ['./closeicon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CloseiconComponent implements OnInit, AfterViewInit {
  @Input() onClick: Function;
  @Input() ariaLabel: string = 'Close';
  @Input() class: string;
  @Input() style: string;

  @ViewChild('close', { static: false }) close: ElementRef;

  onClickHandler(e) {
    this.onClick && this.onClick(e);
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    this.renderer.setAttribute(
      this.close.nativeElement,
      'close-icon',
      this.ariaLabel
    );
  }
}
