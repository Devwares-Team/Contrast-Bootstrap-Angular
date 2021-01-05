import { SidebarService } from './../sidebar.service';
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
  selector: 'CDBSidebarHeader',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarHeaderComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string;
  @Input() prefix;

  @ViewChild('sidebarHeader', { static: false }) sidebarHeader: ElementRef;

  toggled: boolean = false;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    this.dynamicallyHandleToggleSidebar();

    window.addEventListener('resize', () => {
      this.dynamicallyHandleToggleSidebar();
    });
  }

  toggleSidebar() {
    this.toggled = !this.toggled;

    if (this.toggled === true) {
      this.renderer.addClass(this.sidebarHeader.nativeElement, 'toggled');
    } else {
      if (this.sidebarHeader.nativeElement.classList.contains('toggled')) {
        this.renderer.removeClass(this.sidebarHeader.nativeElement, 'toggled');
      }
    }

    this.sidebarService.sidebarState.next(this.toggled);
  }

  dynamicallyHandleToggleSidebar() {
    if (matchMedia('(max-width:991.98px)').matches) {
      this.toggled = true;

      this.renderer.addClass(this.sidebarHeader.nativeElement, 'toggled');
    } else {
      this.toggled = false;

      if (this.sidebarHeader.nativeElement.classList.contains('toggled')) {
        this.renderer.removeClass(this.sidebarHeader.nativeElement, 'toggled');
      }
    }

    this.sidebarService.sidebarState.next(this.toggled);
  }
}
