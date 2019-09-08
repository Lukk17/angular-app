import {Directive, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  ngOnInit(): void {
  }

  constructor(private elRef: ElementRef) {
  }

  // binding to class 'open' - angular will add 'open' if true
  @HostBinding('class.open') isOpen = false;

  // this method will close menu when clicked anywhere
  // but open only if event target element is dropdown menu button
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  // simple version without closing on click anywhere:
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
}
