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
  selector: 'CDBBtnGrp',
  templateUrl: './buttongroup.component.html',
  styleUrls: ['./buttongroup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtongroupComponent implements OnInit, AfterViewInit {
  @Input() size: string;
  @Input() vertical: boolean = false;
  @Input() class: string;
  @Input() style: string;
  @ViewChild('btnGroup', { static: false }) btnGroup: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    if (this.size) {
      let list = this.btnGroup.nativeElement.children;
      for (let item of list) {
        this.renderer.addClass(item, `btn-group-${this.size}`);
        this.renderer.addClass(item, 'btn-group');
      }
    } else {
      let list = this.btnGroup.nativeElement.children;
      for (let item of list) {
        this.renderer.addClass(item, 'btn-group');
      }
    }

    if (this.vertical === true) {
      this.renderer.addClass(this.btnGroup.nativeElement, 'btn-group-vertical');
    }
  }
}
