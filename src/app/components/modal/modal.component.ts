import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
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
  selector: 'CDBModal',
  exportAs: 'cdbModal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('top', [
      state('hidden', style({ transform: 'translateY(-100px)', opacity: 0 })),
      state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('hidden => visible', [
        animate(
          '500ms ease',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
      transition('visible => hidden', [
        animate(
          '500ms ease',
          style({ transform: 'translateY(-100px)', opacity: 0 })
        ),
      ]),
    ]),
    trigger('bottom', [
      state('hidden', style({ transform: 'translateY(100px)', opacity: 0 })),
      state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('hidden => visible', [
        animate(
          '500ms ease',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
      transition('visible => hidden', [
        animate(
          '500ms ease',
          style({ transform: 'translateY(100px)', opacity: 0 })
        ),
      ]),
    ]),
    trigger('left', [
      state('hidden', style({ transform: 'translateX(-100px)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', [
        animate(
          '500ms ease',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition('visible => hidden', [
        animate(
          '500ms ease',
          style({ transform: 'translateX(-100px)', opacity: 0 })
        ),
      ]),
    ]),
    trigger('right', [
      state('hidden', style({ transform: 'translateX(100px)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', [
        animate(
          '500ms ease',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition('visible => hidden', [
        animate(
          '500ms ease',
          style({ transform: 'translateX(100px)', opacity: 0 })
        ),
      ]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, AfterViewInit {
  @Input() class: string;

  // Styles for modal content won't work because the are overwritten by Angular animation transition styles
  // @Input() style: string;

  @Input() wrapperClass: string;
  @Input() wrapperStyle: string;

  @Input() modalClass: string;
  @Input() modalStyle: string;

  @Input() contentClass: string;

  // Styles for modal content won't work because the are overwritten by Angular animation transition styles
  // @Input() contentStyle: string;

  @Input() backdropClass: string;
  @Input() backdropStyle: string;

  @Input() centered: boolean = false;
  @Input() isOpen: boolean = false;
  @Input() size: 'sm' | 'lg' | 'fluid';
  @Input() position:
    | 'top-right'
    | 'bottom-left'
    | 'top-left'
    | 'bottom-right'
    | 'center' = 'center';

  @Input() disableBackdrop: boolean = false;
  @Input() animation: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() keyboard: boolean = true;

  @ViewChild('modalBackdrop', { static: false }) modalBackdrop: ElementRef;
  @ViewChild('modalContainer', { static: false }) modalContainer: ElementRef;
  @ViewChild('modalContainerInner', { static: false })
  modalContainerInner: ElementRef;

  modalAnimationState;

  // @Input() fade: boolean = true;
  // @Input() autoFocus: boolean = true;
  // @Input() backdrop: boolean = true; No need for this since disableBackdrop is available
  // @Input() backdropTransitionTimeout: number = 150 Not applicable because of angular animations;
  // @Input() cascading: boolean;
  // @Input() disableFocusTrap: boolean = true;
  // @Input() frame: boolean;
  // @Input() fullHeight: boolean;
  // @Input() id: string;
  // @Input() inline: boolean;
  // @Input() modalStylesWithoutBackdrop: object;
  // @Input() modalTransitionTimeout: number = 300; Not applicable because of angular animations
  // @Input() noClickableBodyWithoutBackdrop: boolean = false;
  // @Input() overflowScroll: boolean = true;
  // @Input() side: boolean;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.removeAttribute(this.elRef.nativeElement, 'class');
    this.renderer.removeAttribute(this.elRef.nativeElement, 'style');

    if (this.isOpen === true) {
      this.modalAnimationState = 'visible';
    } else {
      this.modalAnimationState = 'hidden';
    }
  }

  ngAfterViewInit() {
    if (this.isOpen === true) {
      this.renderer.addClass(this.modalContainer.nativeElement, 'd-block');
    }

    if (this.centered === true) {
      this.renderer.addClass(
        this.modalContainerInner.nativeElement,
        'modal-dialog-centered'
      );
    }

    if (this.position === 'center') {
      this.renderer.addClass(
        this.modalContainerInner.nativeElement,
        'modal-center'
      );
    } else {
      this.renderer.addClass(
        this.modalContainerInner.nativeElement,
        'modal-side'
      );
    }

    if (this.position === 'top-left') {
      this.renderer.addClass(
        this.modalContainerInner.nativeElement,
        'modal-top-left'
      );
    }

    if (this.position === 'top-right') {
      this.renderer.addClass(
        this.modalContainerInner.nativeElement,
        'modal-top-right'
      );
    }

    if (this.position === 'bottom-left') {
      this.renderer.addClass(
        this.modalContainerInner.nativeElement,
        'modal-bottom-left'
      );
    }

    if (this.position === 'bottom-right') {
      this.renderer.addClass(
        this.modalContainerInner.nativeElement,
        'modal-bottom-right'
      );
    }

    if (this.size) {
      this.renderer.addClass(
        this.modalContainerInner.nativeElement,
        `modal-${this.size}`
      );
    }

    window.addEventListener('keydown', (event) => {
      if (this.keyboard === true && event.keyCode === 27) {
        event.preventDefault();
        this.closeModal();
      }
    });
  }

  toggleModal() {
    if (this.isOpen === true) {
      this.closeModal();
    } else {
      this.renderer.addClass(this.modalContainer.nativeElement, 'd-block');
      this.modalAnimationState = 'visible';
      this.isOpen = true;
    }
  }

  closeModal() {
    this.modalAnimationState = 'hidden';
    this.isOpen = false;

    setTimeout(() => {
      this.renderer.removeClass(this.modalContainer.nativeElement, 'd-block');
    }, 300);
  }
}
