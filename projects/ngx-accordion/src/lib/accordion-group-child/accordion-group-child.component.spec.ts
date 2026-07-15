import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccordionGroupChildComponent } from './accordion-group-child.component';
import { AccordionGroupComponent } from '../accordion-group/accordion-group.component';

describe('AccordionGroupChildComponent', () => {
  let component: AccordionGroupChildComponent;
  let fixture: ComponentFixture<AccordionGroupChildComponent>;

  beforeEach(waitForAsync(() => {
    const accordionGroupStub: Partial<AccordionGroupComponent> = {
      addGroupChild: () => {},
      accordionGroupChildSelected: () => {}
    };
    TestBed.configureTestingModule({
      declarations: [ AccordionGroupChildComponent ],
      providers: [ { provide: AccordionGroupComponent, useValue: accordionGroupStub } ]
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
