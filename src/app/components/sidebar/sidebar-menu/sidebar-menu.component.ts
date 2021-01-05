import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';

@Component({
  selector: 'CDBSidebarMenu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarMenuComponent implements OnInit {
  @Input() class: string;
  @Input() style: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }
}
