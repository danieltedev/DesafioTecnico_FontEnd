import { Directive, ElementRef, Input, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { Materialize } from '../materialize';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[m-form-select]'
})
export class FormSelectDirective implements OnInit, AfterViewInit {

  @Input('m-form-select') option: any;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.el.nativeElement.addEventListener('DOMSubtreeModified', (event: Event) => {
      if ((event.target as HTMLElement).nodeName === '#comment') {
        this.el.nativeElement.M_FormSelect.destroy();
        Materialize.FormSelect.init(this.el, this.option);
      }

      if ((event.target as HTMLElement).nodeName === '#text') {
        this.el.nativeElement.M_FormSelect.destroy();
        Materialize.FormSelect.init(this.el, this.option);
      }
    });
    Materialize.FormSelect.init(this.el, this.option);
  }

  ngOnInit(): void {
  }

}
