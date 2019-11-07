import {NgModule} from "@angular/core";
import {AppUnlessDirective} from "../directive/app-unless.directive";
import {BasicHighlightDirective} from "../directive/basic-highlight.directive";
import {RendererHighlightDirective} from "../directive/renderer-highlight.directive";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppUnlessDirective,
    BasicHighlightDirective,
    RendererHighlightDirective
  ],
  imports: [
    // instead BrowserModule in other than main app.module use CommonModule
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AppUnlessDirective,
    BasicHighlightDirective,
    RendererHighlightDirective,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {

}
