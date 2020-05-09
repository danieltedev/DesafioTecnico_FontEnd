import { DropdownOptions } from './dropdown.options';

export interface Dropdown {
  dropdownEl?: Element;
  el?: Element;
  filterQuery?: Array<any>;
  focusedIndex?: number;
  id?: string;
  isOpen?: boolean;
  isScrollable?: boolean;
  isTouchMoving?: boolean;
  options?: DropdownOptions;
}

