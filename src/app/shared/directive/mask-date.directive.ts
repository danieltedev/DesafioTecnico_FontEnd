import { Directive, Input, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[mask-date]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MaskDateDirective,
    multi: true
  }]
})
export class MaskDateDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  @Input('mask-date') mask: any;

  constructor(private el: ElementRef) { }

  writeValue(obj: any): void {
    this.el.nativeElement.value = obj === '' || !obj ? '' : this.formatDate(obj as Date);
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

  formatDate(date: Date) {
    const d = new Date(date);
    const month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1);
    const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    const year = d.getFullYear();

    return [day, month, year].join('-');
  }

}
