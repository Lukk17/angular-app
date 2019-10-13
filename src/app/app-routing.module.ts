import {RouterModule, Routes} from "@angular/router";
import {OffersComponent} from "./offers/offers.component";
import {OfferDetailComponent} from "./offers/offer-detail/offer-detail.component";
import {ExtrasComponent} from "./extras/extras.component";
import {NgModule} from "@angular/core";

//  in app.component.html there must be added
//  <router-outlet></router-outlet>
//  in place where this component should be inserted
//
//  also add routerLink="/path"
//  as links in html file for example in header
const appRoutes: Routes =[
  {path: '', redirectTo: "/offers", pathMatch: "full"},
  {path: 'offers', component: OffersComponent, children: [
      // for offers detail link, ":name" where name can be anything
      {path: ':name/:desc', component: OfferDetailComponent},
    ]},
  {path: 'extras', component: ExtrasComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
