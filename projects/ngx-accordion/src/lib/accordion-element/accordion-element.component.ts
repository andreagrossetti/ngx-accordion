import { Component, OnInit, Inject } from '@angular/core';
import { AccordionGroupComponent } from '../accordion-group/accordion-group.component';

@Component({
  selector: 'ngx-accordion-element',
  templateUrl: './accordion-element.component.html',
  styleUrls: ['./accordion-element.component.sass']
})
export class AccordionElementComponent implements OnInit {
  public active: boolean;
  protected accordionGroup: AccordionGroupComponent

  constructor(@Inject(AccordionGroupComponent) accordionGroup: AccordionGroupComponent) {
    this.accordionGroup = accordionGroup;
  }

  ngOnInit(): void {
    this.accordionGroup.addElement(this);
  }

  clicked() {
    this.accordionGroup.accordionElementSelected(this);
  }

  setActive(status: boolean) {
    this.active = status;
  }
}
