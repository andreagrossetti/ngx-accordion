import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
import { AccordionGroupChildComponent } from './accordion-group-child/accordion-group-child.component';
import { AccordionGroupElementComponent } from './accordion-group-element/accordion-group-element.component';



@NgModule({
  declarations: [AccordionComponent, AccordionGroupComponent, AccordionGroupChildComponent, AccordionGroupElementComponent],
  imports: [CommonModule],
  exports: [AccordionComponent, AccordionGroupComponent, AccordionGroupChildComponent, AccordionGroupElementComponent]
})
export class AccordionModule { }
