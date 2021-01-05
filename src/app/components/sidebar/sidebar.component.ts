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
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'CDBSidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string;
  @Input() textColor: string = '#ffffff';
  @Input() backgroundColor: string = '#000000';

  toggled: boolean = false;

  @ViewChild('sidebar', { static: false }) sidebar: ElementRef;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');

    this.sidebarService.sidebarState.subscribe((state: boolean) => {
      this.toggled = state;
      this.setToggled();
    });
  }

  ngAfterViewInit() {
    this.sidebarService.textColor.next(this.textColor);
    this.sidebarService.backgroundColor.next(this.backgroundColor);

    this.renderer.setStyle(
      this.sidebar.nativeElement,
      'background-color',
      this.backgroundColor
    );

    this.renderer.setStyle(this.sidebar.nativeElement, 'color', this.textColor);
  }

  setToggled() {
    if (this.toggled === true) {
      this.renderer.addClass(this.sidebar.nativeElement, 'toggled');
    } else {
      this.renderer.removeClass(this.sidebar.nativeElement, 'toggled');
    }
  }
}
