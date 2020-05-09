import { PaginationDirective } from './pagination.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

describe('PaginationDirective', () => {
  it('should create an instance', () => {
    const paginationTrigger = document.createElement('ul');
    const el = new ElementRef(paginationTrigger);
    const render = Renderer2;
    const router = Router;
    const http = HttpClient;
    const directive = new PaginationDirective(el, render.prototype, router.prototype, http.prototype);
    expect(directive).toBeTruthy();
  });
});
