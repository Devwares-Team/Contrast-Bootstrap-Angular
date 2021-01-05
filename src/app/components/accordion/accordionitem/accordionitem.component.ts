import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'CDBAccordionitem',
  templateUrl: './accordionitem.component.html',
  styleUrls: ['./accordionitem.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionitemComponent implements OnInit {
  @Input() data: any;
  @Input() accordionHeaderBodyClass: string;
  @Input() accordionHeaderClass: string;
  @Input() accordionBodyClass: string;
  @Input() accordionItemClass: string;

  opened = true;

  handleAccordionToggle = () => {
    this.opened = !this.opened;
  };
  constructor() {}

  ngOnInit(): void {}
}
