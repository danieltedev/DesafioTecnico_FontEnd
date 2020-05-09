import { Directive, OnInit, Input, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DatepickerDirective } from './datepicker.directive';
import { Materialize } from '../materialize';
import { Util } from '../../util/util';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[m-timepiker]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DatepickerDirective,
    multi: true
  }]
})
export class TimepikerDirective implements OnInit, ControlValueAccessor {

  private instance: any;

  onTouched: any;
  onChange: any;

  // tslint:disable-next-line: no-input-rename
  @Input('m-timepicker') option: any;

  constructor(private el: ElementRef) { }

  writeValue(obj: any): void {
    if (!Util.isEmpty(obj)) {
      console.log(this.instance);
    }
    console.log(obj);
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
    this.instance = Materialize.Timepicker.init(this.el, this.option);
  }

}
