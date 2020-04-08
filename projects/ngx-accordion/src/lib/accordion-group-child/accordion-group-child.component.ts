import { Component, OnInit, OnChanges, Inject, Input } from '@angular/core';
import { AccordionGroupComponent } from '../accordion-group/accordion-group.component';

@Component({
  selector: 'ngx-accordion-group-child',
  templateUrl: './accordion-group-child.component.html',
  styleUrls: ['./accordion-group-child.component.sass']
})
export class AccordionGroupChildComponent implements OnInit, OnChanges {
  @Input() active: boolean;
  protected accordionGroup: AccordionGroupComponent

  constructor(@Inject(AccordionGroupComponent) accordionGroup: AccordionGroupComponent) {
    this.accordionGroup = accordionGroup;
  }

  ngOnInit(): void {
    this.accordionGroup.addGroupChild(this);
  }

  ngOnChanges(changes) {
    if (changes.active.currentValue) {
      this.accordionGroup.accordionGroupChildSelected(this);
    }
  }

  hasBeenSelected() {
    this.accordionGroup.accordionGroupChildSelected(this);
  }

  setActive(status: boolean) {
    this.active = status;
  }
}
