import { TabsDirective } from './tabs.directive';
import { ElementRef } from '@angular/core';

describe('TabsDirective', () => {
  it('should create an instance', () => {
    const tabTrigger = document.createElement('ul');
    const el = new ElementRef(tabTrigger);
    const directive = new TabsDirective(el);
    expect(directive).toBeTruthy();
  });
});
