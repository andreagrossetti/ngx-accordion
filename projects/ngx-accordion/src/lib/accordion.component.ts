import { Component, Input } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';

@Component({
  selector: 'ngx-accordion',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./accordion.component.sass']
})
export class AccordionComponent {
  @Input() showGroupExpandedSymbol: boolean = true;

  private accordionGroups: AccordionGroupComponent[];
  constructor() {
    this.accordionGroups = [];
  }

  addAccordionGroup(accordionGroup: AccordionGroupComponent) {
    this.accordionGroups.push(accordionGroup)
  }

  accordionGroupSelected(group: AccordionGroupComponent) {
    this.accordionGroups.forEach(e => {
      if (e == group) {
        e.setActive(!e.active);
      }
      if (e !== group) {
        e.setActive(false);
      }
    })
  }

}
