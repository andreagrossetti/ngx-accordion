import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionGroupChildComponent } from './accordion-group-child.component';

describe('AccordionGroupChildComponent', () => {
  let component: AccordionGroupChildComponent;
  let fixture: ComponentFixture<AccordionGroupChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionGroupChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionGroupChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
