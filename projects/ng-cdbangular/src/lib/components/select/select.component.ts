import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'CDBSelect',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() class: string;
  @Input() style: string;
  @Input() options: any[];
  @Input() selected: string;
  @Input() optionClass: string;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }
}
