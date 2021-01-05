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
  selector: 'CDBModalHeader',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalHeaderComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string;
  @Input() toggle;

  @ViewChild('modalHeader', { static: false }) modalHeader: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {}

  closeModal() {
    this.toggle.toggleModal();
  }
}
