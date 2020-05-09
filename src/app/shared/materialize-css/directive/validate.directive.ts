import { Directive, ElementRef, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgControl, FormGroup } from '@angular/forms';
import { Subscribable, Subscription } from 'rxjs';
import { Util } from '../../util/util';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[m-validate]'
})
export class ValidateDirective implements OnInit, OnDestroy {

  private subControl: Subscription;
  private subFrom: Subscription;
  private elementView: Element;

  private textErrors = {
    minlength: 'O mínimo de caracteres aceito é de [minlength]',
    required: 'Campo obrigatório'
  };

  constructor(private el: ElementRef, private control: NgControl, private render: Renderer2) { }

  private valid(): void {
    this.elementView = this.getWrapperField(this.el);
    this.render.removeClass(this.elementView, 'invalid');
    this.render.removeClass(this.elementView, 'pending');
    this.render.addClass(this.elementView, 'valid');
  }

  private invalid(): void {
    this.elementView = this.getWrapperField(this.el);
    this.render.removeClass(this.elementView, 'valid');
    this.render.removeClass(this.elementView, 'pending');
    this.render.addClass(this.elementView, 'invalid');
  }

  private pending(): void {
    this.elementView = this.getWrapperField(this.el);
    this.render.removeClass(this.elementView, 'valid');
    this.render.removeClass(this.elementView, 'invalid');
    this.render.addClass(this.elementView, 'pending');
  }

  private reset(): void {
    this.elementView = this.getWrapperField(this.el);
    this.render.removeClass(this.elementView, 'valid');
    this.render.removeClass(this.elementView, 'invalid');
    this.render.removeClass(this.elementView, 'pending');
  }

  private helpText(type: 'invalid' | 'valid' | 'pending'): void {
    if (type === 'invalid') {
      this.getErrors(this.control.control.errors);
    }
  }

  private getErrors(errors: any): string {
    Object.keys(errors).forEach(e => {
      console.log(`Tipo de erro - ${e}`);
      console.log(`Mensgaem mapeada do tipo de erro ${errors[e]}`);

      if (e === 'minlength') {
        this.addSpanHelpText(this.textErrors.minlength.replace('[minlength]', errors[e].requiredLength), e);
      }

      if (e === 'required') {
        this.addSpanHelpText(this.textErrors.required, e);
      }
    });
    return null;
  }

  private addSpanHelpText(msg: string, type: string): void {
    if (this.isExistSpan(this.el, type)) {
      const span = this.render.createElement('span');
      this.render.insertBefore(this.el.nativeElement.parentElement, span, null);
      this.render.setAttribute(span, 'class', 'helper-text');
      this.render.setAttribute(span, 'data-error', msg);
      this.render.setAttribute(span, 'data-type', type);
    }
  }

  private getWrapperField(el: ElementRef) {
    if (el.nativeElement.M_FormSelect) {
      return el.nativeElement.M_FormSelect.input;
    }
    return el.nativeElement;
  }

  private isExistSpan(el: ElementRef, type: string): boolean {
    const childrens = Array.from(this.el.nativeElement.parentElement.children).filter((e: any) => {
      return !Util.isEmpty(e.dataset) && e.dataset.type === type;
    });
    return Util.isEmpty(childrens);
  }

  private controller(): void {

    if (this.control.control.dirty && this.control.control.valid) {
      this.valid();
      this.helpText('valid');
    }

    if (this.control.control.dirty && this.control.control.invalid) {
      this.invalid();
      this.helpText('invalid');
    }

    if (this.control.control.dirty && this.control.control.pending) {
      this.pending();
      this.helpText('pending');
    }

    if (this.control.control.pristine) {
      this.reset();
    }
  }

  ngOnInit(): void {
    console.log('init validator');
    this.subControl = this.control.statusChanges.subscribe(s => {
      this.controller();
    });

    const formRoot: Element = this.el.nativeElement.form;

    formRoot.addEventListener('submit', evnt => {
      if (this.control.control.root.dirty) {
        this.control.control.markAsDirty();
      }
      this.controller();
    });
  }

  ngOnDestroy(): void {
    this.subControl.unsubscribe();
  }

}
