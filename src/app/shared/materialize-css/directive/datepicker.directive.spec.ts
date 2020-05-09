import { DatepickerDirective } from './datepicker.directive';
import { ElementRef } from '@angular/core';

describe('DatepickerDirective', () => {
  it('should create an instance', () => {
    const datepickerTrigger = document.createElement('input');
    const el = new ElementRef(datepickerTrigger);
    const directive = new DatepickerDirective(el);
    expect(directive).toBeTruthy();
  });
});
