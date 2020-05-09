import { Directive, ElementRef, AfterViewInit, Input, OnInit } from '@angular/core';
import { Materialize } from '../materialize';
import { DropdownOptions } from '../interfaces/dropdown.options';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[m-dropdown]'
})
export class DropdownDirective implements OnInit, AfterViewInit {

  @Input('m-dropdown') option: DropdownOptions;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    Materialize.Dropdown.init(this.el, this.option);
  }
}
