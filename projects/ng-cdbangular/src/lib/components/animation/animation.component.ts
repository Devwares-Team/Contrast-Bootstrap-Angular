import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'CDBAnimation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AnimationComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() style: string;
  @Input() type: string;
  @Input() infinite: boolean;
  
  // @Input() count: number = 1;
  // @Input() delay: string;
  // @Input() duration: string | number = 1;
  // @Input() reveal: boolean = false;
  // @Input() countIterations;

  @ViewChild('animationContainer', { static: false })
  animationContainer: ElementRef;

  // Functions below
  // onAnimationStart;
  // onAnimationIteration;
  // onAnimationEnd;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');
  }

  ngAfterViewInit() {
    if (this.type) {
      this.renderer.addClass(this.animationContainer.nativeElement, this.type);
    }

    if (this.infinite === true) {
      this.renderer.addClass(this.animationContainer.nativeElement, 'infinite');
    }
  }
}
