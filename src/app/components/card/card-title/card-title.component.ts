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
  selector: 'CDBCardTitle',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardTitleComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string = '';
  @Input() subtitle: boolean = false;
  @Input() tag: string = 'h4';
  @ViewChild('cardTitle', { static: false }) cardTitle: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    if (this.subtitle === true) {
      this.renderer.addClass(this.cardTitle.nativeElement, 'card-subtitle');
    } else {
      this.renderer.addClass(this.cardTitle.nativeElement, 'card-title');
    }
  }
}
