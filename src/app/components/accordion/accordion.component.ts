import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'CDBAccordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements OnInit, AfterViewInit {
  @ViewChild('accordion', { static: false }) accordion: ElementRef;
  @Input() data: [];
  @Input() accordionClass: string;
  @Input() accordionHeaderBodyClass: string;
  @Input() accordionHeaderClass: string;
  @Input() accordionBodyClass: string;
  @Input() accordionItemClass: string;
  @Input() hideIcon: boolean;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.hideIcon) {
      this.renderer.addClass(this.accordion.nativeElement, `hideicon`);
    }
  }
}
