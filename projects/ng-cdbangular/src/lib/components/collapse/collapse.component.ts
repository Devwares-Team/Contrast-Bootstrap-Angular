import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
} from '@angular/animations';

@Component({
  selector: 'CDBCollapse',
  exportAs: 'cdbCollapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  animations: [
    trigger('expandBody', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*', overflow: 'visible' })),
      transition('expanded <=> collapsed', animate('350ms ease')),
    ]),
    trigger('expandBody2', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*', overflow: 'visible' })),
      transition('expanded <=> collapsed', [
        query('*', style({ opacity: 0 }), {
          optional: true,
        }),
        animate('350ms ease'),
      ]),
    ]),
  ],
})
export class CollapseComponent implements OnInit, AfterViewInit {
  class;
  @Input() style: string;
  @Input() isOpen = false;
  @Input() navbar: boolean = false;
  @Input() expand: 'sm' | 'md' | 'lg' | 'xl' | boolean = false;
  expandAnimationState: string;

  sm: number = 576;
  md: number = 768;
  lg: number = 992;
  xl: number = 1200;
  viewWidth: number;

  @ViewChild('cdbCollapse', { static: false }) cdbCollapse: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    if (this.navbar === true) {
      if (this.expand === false) {
        this.isOpen = false;
      } else {
        this.manageIsOpenState(this.expand);
      }

      window.addEventListener('resize', () => {
        this.manageIsOpenState(this.expand);
        this.manageCollapseClassAndAnimationState();
      });
    }

    this.manageCollapseClassAndAnimationState();
  }

  ngAfterViewInit() {
    if (this.navbar === true) {
      this.renderer.addClass(this.cdbCollapse.nativeElement, 'navbar-collapse');
    }
  }

  toggleCollapse() {
    this.isOpen ? this.hide() : this.show();
  }

  show() {
    this.isOpen = true;
    this.expandAnimationState = 'expanded';
  }

  hide() {
    this.isOpen = false;
    this.expandAnimationState = 'collapsed';
  }

  onExpandBodyStart(event: AnimationEvent) {
    this.class = 'collapsing';
  }

  onExpandBodyDone(event: AnimationEvent) {
    if (this.isOpen === true) {
      this.class = 'collapse show';
    } else {
      this.class = 'collapse';
    }
  }

  manageIsOpenState(expand) {
    if (this.expand !== false) {
      if (expand === 'sm') {
        this.viewWidth = this.sm;
      } else if (expand === 'md') {
        this.viewWidth = this.md;
      } else if (expand === 'lg') {
        this.viewWidth = this.lg;
      } else if (expand === 'xl') {
        this.viewWidth = this.xl;
      }

      if (matchMedia(`(min-width: ${this.viewWidth}px)`).matches) {
        this.isOpen = true;
      }

      if (matchMedia(`(max-width: ${this.viewWidth - 0.02}px)`).matches) {
        this.isOpen = false;
      }
    }
  }

  manageCollapseClassAndAnimationState() {
    if (this.isOpen === true) {
      this.class = 'collapse show';
      this.expandAnimationState = 'expanded';
    } else {
      this.class = 'collapse';
      this.expandAnimationState = 'collapsed';
    }
  }
}
