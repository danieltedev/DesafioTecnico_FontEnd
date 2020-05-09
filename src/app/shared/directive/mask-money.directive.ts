import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[mask-money]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MaskMoneyDirective,
    multi: true
  }]
})
export class MaskMoneyDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) { }

  writeValue(obj: any): void {
    this.el.nativeElement.value = obj === '' || !obj ? '' : this.formtDecimal(obj);
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

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    this.onChange(Number.parseFloat(this.formtDecimal($event.target.value as string)).toFixed(2));
    this.el.nativeElement.value = this.formtDecimal($event.target.value as string);
  }

  private formtDecimal(value: any) {
    const newValue = String(value);
    return newValue.replace(/\D/g, '').replace(/^0/, '').padStart(3, '0').replace(/(\d+)(\d{2})$/, '$1.$2');
  }

}
