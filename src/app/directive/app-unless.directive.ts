import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

/*
  Structural directive - similar to ngIf
 */
@Directive({
  selector: '[appUnless]'
})
export class AppUnlessDirective implements OnInit {

  // need TemplateRef and ViewContainerRef to render view if condition is false
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

  ngOnInit(): void {
  }

  // input as method which will change if boolean change
  // name of this must be same as selectors name
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
}
