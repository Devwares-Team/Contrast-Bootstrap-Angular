import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'CDBProgress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit, AfterViewInit {
  @Input() barClass: string;
  @Input() class: string;
  @Input() text: string = '';
  @Input() color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark' = 'dark';

  @Input() height: number = 10;
  @Input() max: number = 100;
  @Input() min: number = 0;
  @Input() value: number = 0;

  percent;
  progressStyle: string;
  progressBarStyle: string;

  @ViewChild('progressText') progressText: ElementRef;
  @ViewChild('progress') progress: ElementRef;
  @ViewChild('progressBar') progressBar: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.percent = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.renderer.setStyle(
      this.progress.nativeElement,
      'height',
      `${this.height}px`
    );
    this.renderer.setStyle(
      this.progressBar.nativeElement,
      'width',
      `${this.percent}%`
    );
    this.renderer.setStyle(
      this.progressBar.nativeElement,
      'height',
      `${this.height}px`
    );

    // this.renderer.addClass(this.elRef.nativeElement, 'CDBProgress-container');
    this.renderer.setStyle(this.elRef.nativeElement, 'display', 'block');
    this.renderer.setStyle(this.elRef.nativeElement, 'width', '100%');

    if (this.class) {
      let classes = this.class.split(' ');
      classes.forEach((className) => {
        this.renderer.addClass(this.progress.nativeElement, className);
      });
    }

    if (this.barClass) {
      let classes = this.class.split(' ');
      classes.forEach((className) => {
        this.renderer.addClass(this.progressBar.nativeElement, className);
      });
    }

    if (this.color === 'primary') {
      this.renderer.addClass(
        this.progress.nativeElement,
        'CDBProgress-primary'
      );
      this.renderer.addClass(this.progressBar.nativeElement, this.color);
      this.renderer.addClass(
        this.progressText.nativeElement,
        'progress-text-primary'
      );
    }

    if (this.color === 'secondary') {
      this.renderer.addClass(
        this.progress.nativeElement,
        'CDBProgress-secondary'
      );
      this.renderer.addClass(this.progressBar.nativeElement, this.color);
      this.renderer.addClass(
        this.progressText.nativeElement,
        'progress-text-secondary'
      );
    }

    if (this.color === 'success') {
      this.renderer.addClass(
        this.progress.nativeElement,
        'CDBProgress-success'
      );
      this.renderer.addClass(this.progressBar.nativeElement, this.color);
      this.renderer.addClass(
        this.progressText.nativeElement,
        'progress-text-success'
      );
    }

    if (this.color === 'danger') {
      this.renderer.addClass(this.progress.nativeElement, 'CDBProgress-danger');
      this.renderer.addClass(this.progressBar.nativeElement, this.color);
      this.renderer.addClass(
        this.progressText.nativeElement,
        'progress-text-danger'
      );
    }

    if (this.color === 'warning') {
      this.renderer.addClass(
        this.progress.nativeElement,
        'CDBProgress-warning'
      );
      this.renderer.addClass(this.progressBar.nativeElement, this.color);
      this.renderer.addClass(
        this.progressText.nativeElement,
        'progress-text-warning'
      );
    }

    if (this.color === 'info') {
      this.renderer.addClass(this.progress.nativeElement, 'CDBProgress-info');
      this.renderer.addClass(this.progressBar.nativeElement, this.color);
      this.renderer.addClass(
        this.progressText.nativeElement,
        'progress-text-info'
      );
    }

    if (this.color === 'dark') {
      this.renderer.addClass(this.progressBar.nativeElement, this.color);
    }
  }
}
