import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'CDBListGroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListgroupComponent implements OnInit, AfterViewInit {
  @Input() class: string;
  @Input() href: string = '';

  @Input('listGroup') listGroup: ElementRef;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.class) {
      let classes = this.class.split(' ');
      classes.forEach((className) => {
        this.renderer.addClass(this.listGroup.nativeElement, className);
      });
    }
  }
}
