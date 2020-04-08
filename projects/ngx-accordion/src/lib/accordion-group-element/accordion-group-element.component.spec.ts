import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionGroupElementComponent } from './accordion-group-element.component';

describe('AccordionGroupElementComponent', () => {
  let component: AccordionGroupElementComponent;
  let fixture: ComponentFixture<AccordionGroupElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionGroupElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionGroupElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
