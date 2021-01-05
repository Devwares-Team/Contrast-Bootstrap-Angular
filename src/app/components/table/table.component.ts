import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'CDBTable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() autoWidth: boolean;
  @Input() bordered: boolean;
  @Input() borderless: boolean;
  @Input() btn: boolean;
  @Input() class: string;
  @Input() dark: boolean;
  @Input() fixed: boolean;
  @Input() hover: boolean;
  @Input() maxHeight: string;
  @Input() responsive: boolean;
  @Input() responsiveLg: boolean;
  @Input() responsiveMd: boolean;
  @Input() responsiveSm: boolean;
  @Input() responsiveXl: boolean;
  @Input() scrollY: boolean;
  @Input() small: boolean;
  @Input() striped: boolean;
  @Input() theadColor: string;
  @Input() wrapperClassName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
