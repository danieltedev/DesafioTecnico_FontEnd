import { AutocompleteOptions } from './autocomplete.options';
import { Dropdown } from './dropdown';

export interface Autocomplete {
  activeIndex?: number;
  container?: Element;
  count?: number;
  dropdown?: Dropdown;
  el?: Element;
  isOpen?: boolean;
  options?: AutocompleteOptions;
  close(): void;
  destroy(): void;
  open(): void;
  selectOption(el: Element): void;
  updateData(data: any): void;
}
