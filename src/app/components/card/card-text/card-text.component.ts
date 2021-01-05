import {
  Component,
  Input,
  OnInit,
  Renderer2,
  ElementRef,
  AfterViewInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'CDBCardText',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardTextComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string = '';
  @Input() muted: boolean;
  @Input() small: boolean = false;
  @ViewChild('cardText', { static: false }) cardText: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    if (this.muted === true) {
      this.renderer.addClass(this.cardText.nativeElement, 'text-muted');
    }
  }
}
