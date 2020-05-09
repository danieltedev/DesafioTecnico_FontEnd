import { Directive, ElementRef, OnInit, AfterViewInit, Input } from '@angular/core';
import { Materialize } from '../materialize';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[m-floating-action-button]'
})
export class FloatingActionButtonDirective implements OnInit, AfterViewInit {

  @Input('m-floating-action-button') option: any;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    Materialize.FloatingActionButton.init(this.el, this.option);
  }

  ngOnInit(): void {
  }
}
