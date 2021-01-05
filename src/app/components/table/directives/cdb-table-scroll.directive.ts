import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[CdbTableScroll]'
})
export class CdbTableScrollDirective implements OnInit {
  @Input() scrollY = false;
  @Input() maxHeight: any = null;
  
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    const parent = this.el.nativeElement.parentNode;
    const tableWrapper = this.renderer.createElement('div');
    this.renderer.setStyle(tableWrapper, 'max-height', this.maxHeight + 'px');
    this.renderer.setStyle(tableWrapper, 'overflow-y', 'auto');
    this.renderer.setStyle(tableWrapper, 'display', 'block');
    this.renderer.setStyle(tableWrapper, 'width', '100%');

    this.renderer.insertBefore(parent, tableWrapper, this.el.nativeElement);
    this.renderer.removeChild(parent, this.el.nativeElement);
    this.renderer.appendChild(tableWrapper, this.el.nativeElement);
  }
}
