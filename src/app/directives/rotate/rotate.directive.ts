import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRotate]',
})
export class RotateDirective {
  defaultStep: string;
  totalRotation: number;
  shiftKeyPres: boolean;

  @Input()
  step: string;

  constructor(private el: ElementRef) {
    this.defaultStep = '10';
    this.totalRotation = 0;
    this.shiftKeyPres = false;

    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 16) this.shiftKeyPres = true;
    });
    window.addEventListener('keyup', (e) => (this.shiftKeyPres = false));
  }

  @HostListener('click')
  onClick(): void {
    if (this.el.nativeElement.nodeName === 'IMG') {
      if (this.shiftKeyPres) {
        this.el.nativeElement.style.transform = `rotate(${this.handleLeftRotation(
          this.step || this.defaultStep
        )}deg)`;
      } else {
        this.el.nativeElement.style.transform = `rotate(${this.handleRightRotation(
          this.step || this.defaultStep
        )}deg)`;
      }
    }
  }

  handleRightRotation(step: string): number {
    this.totalRotation += parseInt(step);
    return this.totalRotation;
  }

  handleLeftRotation(step: string): number {
    this.totalRotation -= parseInt(step);
    return this.totalRotation;
  }
}
