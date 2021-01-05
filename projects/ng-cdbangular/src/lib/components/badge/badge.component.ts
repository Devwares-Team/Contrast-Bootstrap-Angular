import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'CDBBadge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BadgeComponent implements OnInit {
  @Input() color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info' = 'primary';
  @Input() borderType: 'box' | 'pill' = 'box';
  @Input() size: string = 'medium';
  @Input() flat: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.elRef.nativeElement, 'badge');
    this.renderer.addClass(this.elRef.nativeElement, this.color);
    this.renderer.addClass(this.elRef.nativeElement, this.borderType);

    if (this.size === 'small') {
      this.renderer.addClass(this.elRef.nativeElement, 'CDBBadge-Small');
    } else if (this.size === 'medium') {
      this.renderer.addClass(this.elRef.nativeElement, 'CDBBadge-Medium');
    } else if (this.size === 'large') {
      this.renderer.addClass(this.elRef.nativeElement, 'CDBBadge-Large');
    }

    if (!this.flat) {
      this.renderer.addClass(this.elRef.nativeElement, 'not-flat');
    }
  }
}
