import { Directive, Input, OnChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[appProgressBarColor]',
})
export class ProgressBarColorDirective implements OnChanges {
  static counter = 0;

  @Input() appProgressBarColor: any;
  styleEl: HTMLStyleElement = document.createElement('style');

  uniqueAttr = `app-progress-bar-color-${ProgressBarColorDirective.counter++}`;

  constructor(private el: ElementRef) {
    const nativeEl: HTMLElement = this.el.nativeElement;
    nativeEl.setAttribute(this.uniqueAttr, '');
    nativeEl.appendChild(this.styleEl);
  }

  ngOnChanges(): void {
    this.updateColor();
  }

  updateColor(): void {
    this.styleEl.innerText = `
      [${this.uniqueAttr}] .mat-progress-bar-fill::after {
        background-color: ${this.appProgressBarColor};
      }
    `;
  }
}
