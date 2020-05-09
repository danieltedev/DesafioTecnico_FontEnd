import { DropdownDirective } from './dropdown.directive';
import { ElementRef } from '@angular/core';

describe('DropdownDirective', () => {
  it('should create an instance', () => {
    const dropdownTrigger = document.createElement('a');
    const el = new ElementRef(dropdownTrigger);
    const directive = new DropdownDirective(el);
    expect(directive).toBeTruthy();
  });
});
