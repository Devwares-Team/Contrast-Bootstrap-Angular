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
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'CDBSidebarMenuItem',
  templateUrl: './sidebar-menuitem.component.html',
  styleUrls: ['./sidebar-menuitem.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarMenuitemComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string;
  @Input() icon: string;
  @Input() iconClass: string;
  @Input() suffix;
  @Input() link: string;
  @Input() href: string;
  active: boolean;
  textColor: string;
  backgroundColor: string;
  toggled: boolean = false;

  @ViewChild('sidebarMenuItem', { static: false }) sidebarMenuItem: ElementRef;
  @ViewChild('sidebarMenuItemInner', { static: false })
  sidebarMenuItemInner: ElementRef;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private sidebarService: SidebarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');

    this.sidebarService.sidebarState.subscribe((state: boolean) => {
      this.toggled = state;
      this.setToggled();
    });

    if (!this.link && !this.href) {
      this.link = '/';
    }
  }

  ngAfterViewInit() {
    this.sidebarService.backgroundColor.subscribe((state: string) => {
      this.backgroundColor = state;
    });

    this.sidebarService.textColor.subscribe((state: string) => {
      this.textColor = state;
    });

    if (this.link) {
      // Setting Active Link
      this.router.events
        .pipe(filter((e) => e instanceof NavigationEnd))
        .subscribe((navEnd: NavigationEnd) => {
          if (navEnd.urlAfterRedirects === this.link) {
            this.setStyle();
          } else {
            this.removeStyle();
          }
        });
    }
  }

  setToggled() {
    if (this.toggled === true) {
      this.renderer.addClass(this.sidebarMenuItem.nativeElement, 'toggled');
      this.renderer.addClass(
        this.sidebarMenuItemInner.nativeElement,
        'toggled'
      );
    } else {
      this.renderer.removeClass(this.sidebarMenuItem.nativeElement, 'toggled');
      this.renderer.removeClass(
        this.sidebarMenuItemInner.nativeElement,
        'toggled'
      );
    }
  }

  setStyle() {
    this.renderer.setStyle(
      this.sidebarMenuItemInner.nativeElement,
      'color',
      this.backgroundColor
    );

    this.renderer.setStyle(
      this.sidebarMenuItemInner.nativeElement,
      'background',
      this.textColor
    );
  }

  removeStyle() {
    this.renderer.removeAttribute(
      this.sidebarMenuItemInner.nativeElement,
      'style'
    );
  }
}
