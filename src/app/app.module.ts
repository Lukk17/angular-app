import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BoxComponent} from './simpleBoxes/box/box.component';
import {BoxesComponent} from './simpleBoxes/boxes/boxes.component';
import { OffersComponent } from './offers/offers.component';
import { OffersListComponent } from './offers/offers-list/offers-list.component';
import { OfferDetailComponent } from './offers/offer-detail/offer-detail.component';
import { HeaderComponent } from './header/header.component';
import { BookedListComponent } from './offers/booked-list/booked-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    BoxesComponent,
    OffersComponent,
    OffersListComponent,
    OfferDetailComponent,
    HeaderComponent,
    BookedListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
