import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'CDBPageitem',
  templateUrl: './pageitem.component.html',
  styleUrls: ['./pageitem.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageitemComponent implements OnInit {
  @Input() class: string;
  @Input() style: string;
  @Input() disabled: boolean = false;
  @Input() active: boolean = false;

  @ViewChild('pageitem', { static: false }) pageitem: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }
}
