import { Autocomplete } from './interfaces/autocomplete';
import { ElementRef } from '@angular/core';
import { Dropdown } from './interfaces/dropdown';
import { AutocompleteOptions } from './interfaces/autocomplete.options';
import { DropdownOptions } from './interfaces/dropdown.options';
import { Toast } from './interfaces/toast';

declare var M;

export class Materialize {

  static Autocomplete = class {

    static getInstance(el: ElementRef): Autocomplete {
      return M.Autocomplete.getInstance(el.nativeElement) as any;
    }

    static init(els: ElementRef, options: AutocompleteOptions): Autocomplete {
      return M.Autocomplete.init(els.nativeElement, options as any) as any;
    }
  };

  static Dropdown = class {

    static getInstance(el: ElementRef): Dropdown {
      return M.Dropdown.getInstance(el.nativeElement) as any;
    }

    static init(els: ElementRef, options: DropdownOptions): Dropdown {
      return M.Dropdown.init(els.nativeElement, options as any) as any;
    }
  };

  static FloatingActionButton = class {

    static getInstance(el: ElementRef): any {
      return M.FloatingActionButton.getInstance(el.nativeElement) as any;
    }

    static init(els: ElementRef, options: any): any {
      return M.FloatingActionButton.init(els.nativeElement, options as any) as any;
    }
  };

  static FormSelect = class {

    static getInstance(el: ElementRef): any {
      return M.FormSelect.getInstance(el.nativeElement);
    }

    static init(els: ElementRef, options: any): any {
      return M.FormSelect.init(els.nativeElement, options);
    }
  };

  static Tabs = class {

    static getInstance(el: ElementRef): any {
      return M.Tabs.getInstance(el.nativeElement);
    }

    static init(els: ElementRef, options: any): any {
      return M.Tabs.init(els.nativeElement, options);
    }
  };

  static Datepicker = class {

    static getInstance(el: ElementRef): any {
      return M.Datepicker.getInstance(el.nativeElement);
    }

    static init(el: ElementRef, option: any) {
      return M.Datepicker.init(el.nativeElement, option);
    }
  };

  // Modal: ƒ Modal(el, options)
  static Modal = class {

    static getInstance(el: ElementRef): any {
      return M.Modal.getInstance(el.nativeElement);
    }

    static init(el: ElementRef, option: any) {
      return M.Modal.init(el.nativeElement, option);
    }
  };

  // Timepicker: ƒ Timepicker(el, options)
  static Timepicker = class {

    static init(el: ElementRef, option: any): any {
      return M.Timepicker.init(el.nativeElement, option);
    }

    static getInstance(el: ElementRef): any {
      return M.Timepicker.getInstance(el.nativeElement);
    }
  };

  public static AutoInit(): void {
    M.AutoInit();
  }

  public static updateTextFields(): void { M.updateTextFields(); }

  public static toast(toast: Toast): void { M.toast(toast as any); }

  // Carousel: ƒ Carousel(el, options)
  // CharacterCounter: ƒ CharacterCounter(el, options)
  // Chips: ƒ Chips(el, options)
  // Collapsible: ƒ Collapsible(el, options)
  // Datepicker: ƒ Datepicker(el, options)
  // Dropdown: ƒ Dropdown(el, options)
  // FloatingActionButton: ƒ FloatingActionButton(el, options)
  // FormSelect: ƒ FormSelect(el, options)
  // Materialbox: ƒ Materialbox(el, options)
  // Parallax: ƒ Parallax(el, options)
  // Pushpin: ƒ Pushpin(el, options)
  // Range: ƒ Range(el, options)
  // ScrollSpy: ƒ ScrollSpy(el, options)
  // Sidenav: ƒ Sidenav(el, options)
  // Slider: ƒ Slider(el, options)
  // Tabs: ƒ Tabs(el, options)
  // TapTarget: ƒ TapTarget(el, options)
  // Toast: ƒ Toast(options)
  // Tooltip: ƒ Tooltip(el, options)
  // anime: ƒ q(a)
  // checkPossibleAlignments: ƒ(el, container, bounding, offset)
  // checkWithinContainer: ƒ(container, bounding, offset)
  // elementOrParentIsFixed: ƒ(element)
  // escapeHash: ƒ(hash)
  // getDocumentScrollLeft: ƒ()
  // getDocumentScrollTop: ƒ()
  // getIdFromTrigger: ƒ(trigger)
  // getOverflowParent: ƒ(element)
  // guid: ƒ()
  // initializeJqueryWrapper: ƒ(plugin, pluginName, classRef)
  // objectSelectorString: ƒ(obj)
  // textareaAutoResize: ƒ($textarea)
  // throttle: ƒ(func, wait, options)
  // toast: ƒ(options)
  // updateTextFields: ƒ()
  // validate_field: ƒ(object)
}
