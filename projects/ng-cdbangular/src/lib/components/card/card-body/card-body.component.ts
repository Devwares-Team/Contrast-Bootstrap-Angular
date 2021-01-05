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
  selector: 'CDBCardBody',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardBodyComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string = '';
  @Input() cascade: boolean = false;

  @ViewChild('cardBody', { static: false }) cardBody: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    if (this.cascade === true) {
      this.renderer.addClass(this.cardBody.nativeElement, 'card-body-cascad');
    }
  }
}
