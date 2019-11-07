import {RouterModule, Routes} from "@angular/router";
import {OffersComponent} from "./offers.component";
import {OfferDetailComponent} from "./offer-detail/offer-detail.component";
import {NgModule} from "@angular/core";

const offersRoutes: Routes = [
  {
    path: '',
    component: OffersComponent,
    children: [
      // for offers detail link, ":name" where name can be anything
      {path: ':name/:desc', component: OfferDetailComponent}
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(offersRoutes)],
    exports: [RouterModule]
  }
)
export class OffersRoutingModule {

}
