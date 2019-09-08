import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

/*
generated using:
ng g d renderer-highlight
 */

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {

  // using renderer is recommended because if app will not run in browser or have not access to DOM,
  // then without renderer it will crash

  @Input() initialColor: string = 'pink';
  @Input() defaultColor: string = 'transparent';
  @Input() activeColor: string = 'purple';

  ngOnInit(): void {
    // initial values must be set here not for example in HostBinding
    this.backgroundColor = this.initialColor;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  // 'mouseenter' and 'mouseleave' are declared in angular constants,
  // so you CAN'T rename it for example 'mouseEnter'

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.activeColor);
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor);
  }

  // using HostBinding instead of renderer to set up initial value (could be done in OnInit method too)
  @HostBinding('style.backgroundColor') backgroundColor: string;
}
