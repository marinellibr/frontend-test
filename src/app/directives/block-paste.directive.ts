import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlockPaste]'
})
export class BlockPasteDirective {
  constructor() { }

  @HostListener('paste', ['$event']) appBlockPaste(e: KeyboardEvent): void {
    e.preventDefault();
  }
}
