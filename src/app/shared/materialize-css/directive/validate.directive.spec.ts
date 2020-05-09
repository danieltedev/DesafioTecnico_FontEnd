import { ValidateDirective } from './validate.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

describe('ValidateDirective', () => {
  it('should create an instance', () => {
    const validateTrigger = document.createElement('input');
    const el = new ElementRef(validateTrigger);
    const directive = new ValidateDirective(el, NgControl.prototype, Renderer2.prototype);
    expect(directive).toBeTruthy();
  });
});
