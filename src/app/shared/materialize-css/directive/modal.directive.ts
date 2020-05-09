import { Directive, Input, AfterViewInit, ElementRef, OnChanges, SimpleChanges, AfterContentInit } from '@angular/core';
import { Materialize } from '../materialize';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[m-modal]'
})
export class ModalDirective implements AfterViewInit, OnChanges {

  @Input('m-modal') option: any;

  private instance: any;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.option.currentValue && (changes.option.currentValue as any).open && this.instance) {
      this.instance.open();
    }

    if (changes.option.currentValue && !(changes.option.currentValue as any).open && this.instance) {
      this.instance.close();
    }
  }

  ngAfterViewInit(): void {
    this.instance = Materialize.Modal.init(this.el, this.option);
  }

}
