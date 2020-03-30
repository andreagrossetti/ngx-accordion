import { Component, OnInit, Input, Inject } from '@angular/core';
import { AccordionComponent } from '../accordion.component';
import { AccordionElementComponent } from '../accordion-element/accordion-element.component';

@Component({
  selector: 'ngx-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.sass']
})
export class AccordionGroupComponent implements OnInit {
  @Input() startOpen: boolean;
  public active: boolean;
  public hasAccordionElementActive: boolean;
  public showGroupExpandedSymbol: boolean;
  private accordion: AccordionComponent
  private accordionElements: AccordionElementComponent[];
  constructor(@Inject(AccordionComponent) accordion: AccordionComponent) {
    this.accordion = accordion;
    this.showGroupExpandedSymbol = accordion.showGroupExpandedSymbol;
  }

  ngOnInit(): void {
    this.accordionElements = [];
    this.active = this.startOpen;
    this.accordion.addAccordionGroup(this);
  }

  accordionGroupClick() {
    this.accordion.accordionGroupSelected(this);
  }

  setActive(status) {
    if (status === false) {
      this.hasAccordionElementActive = false;
      this.accordionElements.forEach(e => { e.setActive(false); })
    }
    this.active = status;
  }

  accordionElementSelected(element: AccordionElementComponent) {
    this.hasAccordionElementActive = true;
    this.accordionElements.forEach(e => { if (e !== element) { e.setActive(false); } })
    element.setActive(true);
  }

  addElement(element: AccordionElementComponent) {
    this.accordionElements.push(element);
  }

}
