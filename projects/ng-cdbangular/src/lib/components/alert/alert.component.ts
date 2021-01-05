import {
  Component,
  Input,
  OnInit,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'CDBAlert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent implements OnInit {
  @Input() color: string = 'primary';
  @Input() class: string;
  @Input() style: string;
  @Input() dismiss: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  onDismiss(event) {
    event.target.parentNode.parentNode.remove();
  }
}
