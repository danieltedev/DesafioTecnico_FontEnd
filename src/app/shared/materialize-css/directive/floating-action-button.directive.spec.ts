import { FloatingActionButtonDirective } from './floating-action-button.directive';
import { ElementRef } from '@angular/core';

describe('FloatingActionButtonDirective', () => {
  it('should create an instance', () => {
    const floationgActionButtonTrigger = document.createElement('div');
    const el = new ElementRef(floationgActionButtonTrigger);
    const directive = new FloatingActionButtonDirective(el);
    expect(directive).toBeTruthy();
  });
});
