import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'CDBCarouselindicator',
  templateUrl: './carouselindicator.component.html',
  styleUrls: ['./carouselindicator.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselindicatorComponent implements OnInit {
  @Input() active: boolean;
  @Input() alt: string;
  @Input() class: string;
  @Input() img: string;
  constructor() {}

  ngOnInit(): void {}
}
