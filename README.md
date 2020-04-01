# NgxAccordion
<img src="https://github.com/andreagrossetti/ngx-accordion/raw/master/projects/ngx-accordion-showcase/src/assets/screenshot.png" alt="drawing" width="150"/>

I've build this angular accordion because other accordions were outdated or could not expand accordion group's inner elements as well as accordion groups.

## Demo
https://stackblitz.com/edit/ngx-accordion

## Installation
```bash
yarn add @andreagrossetti/ngx-accordion
```

## Setup
```typescript
import { AccordionModule } from '@andreagrossetti/ngx-accordion';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AccordionModule // ngx-accordion added
  ],
  bootstrap: [App],
  declarations: [App]
})
class MainModule {}
```

## Use
```html
<ngx-accordion>
  <ngx-accordion-group>
    Devices
    <ngx-accordion-element>Groups</ngx-accordion-element>
    <ngx-accordion-element>Firmware</ngx-accordion-element>
  </ngx-accordion-group>
  <ngx-accordion-group [startActive]="startActive">
    Users
    <ngx-accordion-element>Roles</ngx-accordion-element>
  </ngx-accordion-group>
  <ngx-accordion-group>
    Analytics
    <ngx-accordion-element>Data</ngx-accordion-element>
  </ngx-accordion-group>
  <ngx-accordion-group>
    Help & Support
  </ngx-accordion-group>
</ngx-accordion>

```

## Options

### AccordionGroup options
| Option                  | Type    | Default | Description                               |
|-------------------------|---------|---------|-------------------------------------------|
| startActive             | boolean | false   | Initial status of Accordion Group         |
| showGroupExpandedSymbol | boolean | true    | Show + or - symbol if group is expanded.  |

### AccordionElement options
| Option      | Type    | Default | Description                        |
|-------------|---------|---------|------------------------------------|
| startActive | boolean | false   | Initial status of Accordion Element|
