import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'CDBSwitch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwitchComponent implements OnInit {
  @Input() checked: boolean = false;

  constructor() {}

  ngOnInit() {}

  handleChange() {
    this.checked = !this.checked;
  }
}
