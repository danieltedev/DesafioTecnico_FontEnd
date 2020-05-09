import { Directive, OnInit, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Materialize } from '../materialize';
import { ControlValueAccessor } from '@angular/forms';
import { Util } from '../../util/util';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[m-date-timepiker]'
})
export class DateTimepikerDirective implements OnInit, ControlValueAccessor {
  private instanceDate: any;
  private instanceTime: any;
  private openTime: false;

  private realValue: string;
  private timeValue: string;
  private dateValue: string;

  onTouched: any;
  onChange: any;

  // tslint:disable-next-line: no-input-rename
  @Input('m-date-timepiker') option: any = [];

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }

  writeValue(obj: any): void {
    if (!Util.isEmpty(obj)) {
      console.log(this.instanceDate);
      console.log(this.instanceTime);
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
    this.dateValue = this.el.nativeElement.M_Datepicker.toString();
    this.timeValue = Util.isEmpty(this.el.nativeElement.M_Timepicker) ? '' : this.el.nativeElement.M_Timepicker.time;
    this.realValue = `${this.dateValue} ${this.timeValue}`;
    this.el.nativeElement.value = this.realValue;
    if (this.onChange) {
      this.onChange(new Date($event.target.value));
    }
  }

  ngOnInit(): void {
    this.option = Util.isEmpty(this.option) ? {} : this.option;
    const optionTime = Object.assign({}, this.option);

    optionTime.twelveHour = false;
    optionTime.showClearBtn = true;

    this.option.format = 'yyyy-mm-dd';
    this.option.showClearBtn = true;
    this.option.onClose = () => {
      this.instanceTime = Materialize.Timepicker.init(this.el, optionTime);
      this.instanceTime.open();
    };

    this.option.onOpen = () => {
      if (this.instanceTime) {
        this.instanceTime.destroy();
      }
    };

    this.instanceDate = Materialize.Datepicker.init(this.el, this.option);
  }
}
