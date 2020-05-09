export interface DropdownOptions {
  alignment?: 'left' | 'right';
  autoFocus?: boolean;
  closeOnClick?: boolean;
  constrainWidth?: boolean;
  container?: Element;
  coverTrigger?: boolean;
  hover?: boolean;
  inDuration?: number;
  onCloseEnd(): void;
  onCloseStart(): void;
  onOpenEnd(): void;
  onOpenStart(): void;
  outDuration(): void;
  onItemClick(itemEl: Element): void;
}
