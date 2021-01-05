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
  selector: 'CDBModalBody',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalBodyComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string;

  @ViewChild('modalBody', { static: false }) modalBody: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {}
}
