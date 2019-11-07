import {NgModule} from "@angular/core";
import {OffersComponent} from "./offers.component";
import {OffersListComponent} from "./offers-list/offers-list.component";
import {OfferDetailComponent} from "./offer-detail/offer-detail.component";
import {BookedListComponent} from "./booked-list/booked-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AppUnlessDirective} from "../directive/app-unless.directive";
import {BasicHighlightDirective} from "../directive/basic-highlight.directive";
import {RendererHighlightDirective} from "../directive/renderer-highlight.directive";
import {OffersRoutingModule} from "./offers-routing.module";

@NgModule(
  {
    declarations: [
      OffersComponent,
      OffersListComponent,
      OfferDetailComponent,
      BookedListComponent,
      AppUnlessDirective,
      BasicHighlightDirective,
      RendererHighlightDirective
    ],
    imports: [
      // instead BrowserModule in other than main app.module use CommonModule
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      OffersRoutingModule
    ]
  }
)
export class OffersModule {

}
