import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ngx-accordion-group-element',
    templateUrl: './accordion-group-element.component.html',
    styleUrls: ['./accordion-group-element.component.sass'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AccordionGroupElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
