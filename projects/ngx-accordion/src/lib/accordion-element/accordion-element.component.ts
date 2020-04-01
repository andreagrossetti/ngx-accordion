import { Component, OnInit, Inject, Input } from '@angular/core';
import { AccordionGroupComponent } from '../accordion-group/accordion-group.component';

@Component({
  selector: 'ngx-accordion-element',
  templateUrl: './accordion-element.component.html',
  styleUrls: ['./accordion-element.component.sass']
})
export class AccordionElementComponent implements OnInit {
  @Input() startActive: boolean;
  public active: boolean;
  protected accordionGroup: AccordionGroupComponent

  constructor(@Inject(AccordionGroupComponent) accordionGroup: AccordionGroupComponent) {
    this.accordionGroup = accordionGroup;
  }

  ngOnInit(): void {
    this.accordionGroup.addElement(this);
    if (this.startActive) {
      this.accordionGroup.accordionElementSelected(this);
    }
  }

  hasBeenSelected() {
    this.accordionGroup.accordionElementSelected(this);
  }

  setActive(status: boolean) {
    this.active = status;
  }
}
