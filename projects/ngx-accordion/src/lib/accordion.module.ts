import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
import { AccordionElementComponent } from './accordion-element/accordion-element.component';



@NgModule({
  declarations: [AccordionComponent, AccordionGroupComponent, AccordionElementComponent],
  imports: [CommonModule],
  exports: [AccordionComponent, AccordionGroupComponent, AccordionElementComponent]
})
export class AccordionModule { }
