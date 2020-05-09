import { Directive, Input, ElementRef, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Materialize } from '../materialize';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[m-datepicker]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DatepickerDirective,
    multi: true
  }]
})
export class DatepickerDirective implements OnInit, AfterViewInit, ControlValueAccessor {

  private instance: any;

  onTouched: any;
  onChange: any;

  @Input('m-datepicker') option: any;

  constructor(private el: ElementRef) { }

  writeValue(obj: any): void {
    if (obj !== '' || !obj) {
      this.instance.setDate(new Date(obj));
      this.instance.setInputValue();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
  }

  @HostListener('change', ['$event'])
  onDoChange($event: any) {
    if (this.onChange) {
      this.onChange(new Date($event.target.value));
    }
  }

  ngOnInit(): void {
    this.instance = Materialize.Datepicker.init(this.el, this.option);
  }

  ngAfterViewInit(): void {
  }

}
