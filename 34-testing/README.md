![cf](http://i.imgur.com/7v5ASc8.png) 34: Testing & UI Styling
===

## Learning Objectives
* Students will be able to use SCSS to create component based and modular CSS styles
* Students will be able to *generally* conform to the SMACCS principles for creating base, layout, and theme containers for their application styles
* Students will be able to create and use global SCSS variables for reusable styles
* Students will be able to test the actions and reducers created as part of their redux workflow

## Readings
* Read [sass getting started guide](http://sass-lang.com/guide)

## Outline

### SCSS

SCSS is a variation of SASS, which stands for "syntactically awesome stylesheets". It gives us the ability to do the following things with our CSS styles:
  * creation of modular css "partials"
  * nesting of CSS rules
  * ability to import partials into/from other partial files
  * ability to create functional CSS components and mixins
  * ability to use math operators in CSS

SCSS partials are often modularized to fit the following structure but should be modified/altered to work with your specific application's needs:

```
style
  lib
    base
      _base.scss
      _reset.scss
    theme
      _vars.scss
    layout
      _header.scss
      _footer.scss
      _content.scss

component
  my-component-dir
    _my-component-dir.scss
```