import {NgModule} from "@angular/core";
import {OffersComponent} from "./offers.component";
import {OffersListComponent} from "./offers-list/offers-list.component";
import {OfferDetailComponent} from "./offer-detail/offer-detail.component";
import {BookedListComponent} from "./booked-list/booked-list.component";
import {RouterModule} from "@angular/router";
import {OffersRoutingModule} from "./offers-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule(
  {
    declarations: [
      OffersComponent,
      OffersListComponent,
      OfferDetailComponent,
      BookedListComponent
    ],
    imports: [
      RouterModule,
      OffersRoutingModule,
      SharedModule
    ]
  }
)
export class OffersModule {

}
