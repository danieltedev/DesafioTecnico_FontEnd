import { FormSelectDirective } from './form-select.directive';
import { ElementRef } from '@angular/core';

describe('FormSelectDirective', () => {
  it('should create an instance', () => {
    const formSelectTrigger = document.createElement('select');
    const el = new ElementRef(formSelectTrigger);
    const directive = new FormSelectDirective(el);
    expect(directive).toBeTruthy();
  });
});
