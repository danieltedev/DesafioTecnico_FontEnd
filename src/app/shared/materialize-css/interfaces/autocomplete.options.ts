export interface AutocompleteOptions {
  data?: {};
  limit?: number;
  minLength?: number;
  onAutocomplete(): void;
  sortFunction(a: any, b: any, inputString: any): void;
}
