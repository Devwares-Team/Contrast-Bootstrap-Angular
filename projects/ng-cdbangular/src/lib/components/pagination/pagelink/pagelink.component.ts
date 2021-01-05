import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'CDBPagelink',
  templateUrl: './pagelink.component.html',
  styleUrls: ['./pagelink.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PagelinkComponent implements OnInit {
  @Input() class: string;
  @Input() style: string;
  @Input() string: string;
  @Input() disabled: boolean = false;

  @ViewChild('pagelink', { static: false }) pagelink: ElementRef;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }
}
