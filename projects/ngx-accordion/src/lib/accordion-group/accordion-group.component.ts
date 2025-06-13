import { Component, OnInit, OnChanges, Input, Inject } from '@angular/core';
import { AccordionComponent } from '../accordion.component';
import { AccordionGroupChildComponent } from '../accordion-group-child/accordion-group-child.component';

@Component({
    selector: 'ngx-accordion-group',
    templateUrl: './accordion-group.component.html',
    styleUrls: ['./accordion-group.component.sass'],
    standalone: false
})
export class AccordionGroupComponent implements OnInit, OnChanges {
  @Input() active: boolean;
  @Input() handleActiveStateManually: boolean;
  public hasAccordionGroupChildActive: boolean;
  public showGroupExpandedSymbol: boolean;
  private accordion: AccordionComponent
  private accordionGroupChildren: AccordionGroupChildComponent[];
  constructor(@Inject(AccordionComponent) accordion: AccordionComponent) {
    this.accordion = accordion;
    this.showGroupExpandedSymbol = accordion.showGroupExpandedSymbol;
  }

  ngOnInit(): void {
    this.accordionGroupChildren = [];
    this.accordion.addAccordionGroup(this);
  }

  ngOnChanges(changes) {
    const newValue = changes.active.currentValue;
    if (newValue !== this.active) {
      this.accordion.setAccordionGroupStatus(this, newValue);
    }
  }

  accordionGroupClick() {
    if (this.handleActiveStateManually) {
      this.accordionGroupChildren.forEach(e => { e.setActive(false); })
      this.hasAccordionGroupChildActive = false;
      return;
    }
    if (this.hasAccordionGroupChildActive && this.active) {
      this.accordion.setAccordionGroupStatus(this, true);
    } else {
      this.accordion.setAccordionGroupStatus(this, !this.active);
    }
  }

  setActive(status: boolean) {
    this.hasAccordionGroupChildActive = false;
    this.accordionGroupChildren.forEach(e => { e.setActive(false); })
    this.active = status;
  }

  accordionGroupChildSelected(groupChild: AccordionGroupChildComponent) {
    if (!this.active) {
      this.accordion.setAccordionGroupStatus(this, true);
    }
    this.hasAccordionGroupChildActive = true;
    this.accordionGroupChildren.forEach(e => { if (e !== groupChild) { e.setActive(false); } })
    groupChild.setActive(true);
  }

  addGroupChild(groupChild: AccordionGroupChildComponent) {
    this.accordionGroupChildren.push(groupChild);
  }

}
