import { Component, OnInit, Input, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'CDBFooter',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
  @Input() color: string;
  @Input() class: string;
  @Input() style: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

}
