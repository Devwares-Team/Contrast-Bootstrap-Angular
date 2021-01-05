import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTextComponent } from './card-text.component';

describe('CardTextComponent', () => {
  let component: CardTextComponent;
  let fixture: ComponentFixture<CardTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
