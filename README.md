# NgxAccordion
[![npm version](https://badge.fury.io/js/@andreagrossetti%2Fngx-accordion.svg)](https://badge.fury.io/js/@andreagrossetti%2Fngx-accordion)

<img src="https://github.com/andreagrossetti/ngx-accordion/raw/master/projects/ngx-accordion-showcase/src/assets/screenshot.png" alt="drawing" width="150"/>

I've build this angular accordion because other accordions were outdated or could not expand accordion group's inner elements as well as accordion groups.

## Demo
https://stackblitz.com/edit/ngx-accordion

## Changes from version 0.1.x
- ```ngx-accordion-element``` has been renamed to ```ngx-accordion-group-child```.
- Added ```ngx-accordion-group-header``` to be able to use anchor link as group title.
- ```startActive``` option has been removed
- added ```active``` option to be able to set accordion group and accordion group child active state.

## Installation
```bash
yarn add @andreagrossetti/ngx-accordion
```

## Compatibility

From `v21` onwards the library's major version tracks the required Angular major version, so pick the release that matches the Angular version in your project:

| Library version | Angular |
|-----------------|---------|
| `22.x`          | 22      |
| `21.x`          | 21      |
| `0.5.x`         | 20      |
| `0.4.x`         | 17      |
| `0.3.x`         | 13      |

The `latest` tag always points to the newest Angular release. To install the line for an older Angular version, pin the range explicitly:

```bash
# latest (Angular 22)
yarn add @andreagrossetti/ngx-accordion

# a specific line, e.g. for Angular 21
yarn add @andreagrossetti/ngx-accordion@^21
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
Open demo for more examples

```html
<ngx-accordion>
  <ngx-accordion-group>
    <ngx-accordion-group-element>
      <fa-icon [icon]="faAppleAlt"></fa-icon> Fruits
    </ngx-accordion-group-element>
    <ngx-accordion-group-child> Banana</ngx-accordion-group-child>
    <ngx-accordion-group-child> Orange</ngx-accordion-group-child>
  </ngx-accordion-group>
  <ngx-accordion-group [active]="true">
    <ngx-accordion-group-element>
      <fa-icon [icon]="faCarrot"></fa-icon> Vegetables
    </ngx-accordion-group-element>
    <ngx-accordion-group-child>Carrot</ngx-accordion-group-child>
  </ngx-accordion-group>
  <ngx-accordion-group>
    <ngx-accordion-group-element>
      <fa-icon [icon]="faCookie"></fa-icon> Cookies
    </ngx-accordion-group-element>
    <ngx-accordion-group-child>Butter cookie</ngx-accordion-group-child>
    <ngx-accordion-group-child>Macaron</ngx-accordion-group-child>
  </ngx-accordion-group>
  <ngx-accordion-group>
    <ngx-accordion-group-element>
      <fa-icon [icon]="faBook"></fa-icon> Books
    </ngx-accordion-group-element>
  </ngx-accordion-group>
</ngx-accordion>

```

## Options

### AccordionGroup options
| Option                  | Type    | Default | Description                                            |
|-------------------------|---------|---------|--------------------------------------------------------|
| active                  | boolean | false   | Initial status of Accordion Group                      |
| showGroupExpandedSymbol | boolean | true    | Show + or - symbol if group is expanded.               |
| handleStateManually     | boolean | false   | handle active state manually (needed for anchor links) | 

### AccordionGroupChild options
| Option      | Type    | Default | Description                        |
|-------------|---------|---------|------------------------------------|
| active      | boolean | false   | Initial status of Accordion Element|
