import { Directive, ElementRef, Input, OnInit, AfterViewInit } from '@angular/core';
import { Materialize } from '../materialize';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[m-tabs]'
})
export class TabsDirective implements OnInit, AfterViewInit {

  @Input('m-tabs') option: any;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    Materialize.Tabs.init(this.el, this.option);
  }

  ngOnInit(): void {
  }

}
