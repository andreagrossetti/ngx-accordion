import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccordionGroupElementComponent } from './accordion-group-element.component';

describe('AccordionGroupElementComponent', () => {
  let component: AccordionGroupElementComponent;
  let fixture: ComponentFixture<AccordionGroupElementComponent>;

  beforeEach(waitForAsync(() => {
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
