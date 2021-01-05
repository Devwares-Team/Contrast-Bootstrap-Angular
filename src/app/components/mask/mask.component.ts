import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Renderer2,
  AfterViewInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'CDBMask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MaskComponent implements OnInit, AfterViewInit {
  @Input() class: string = '';
  @Input() style: string = '';
  @Input() overlay: string = '';
  @Input() pattern: string = '';
  @ViewChild('span', { static: false }) span: ElementRef;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit(): void {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }
  ngAfterViewInit() {

    if (this.pattern) {
      this.renderer.addClass(this.span.nativeElement, this.pattern);
    }
    if (this.overlay) {
      this.renderer.addClass(this.span.nativeElement, this.overlay);
    }
  }
}
