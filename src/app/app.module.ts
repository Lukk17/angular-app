import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BoxComponent} from './simpleBoxes/box/box.component';
import {BoxesComponent} from './simpleBoxes/boxes/boxes.component';
import {OffersComponent} from './offers/offers.component';
import {OffersListComponent} from './offers/offers-list/offers-list.component';
import {OfferDetailComponent} from './offers/offer-detail/offer-detail.component';
import {HeaderComponent} from './header/header.component';
import {BookedListComponent} from './offers/booked-list/booked-list.component';
import {BasicHighlightDirective} from "./directive/basic-highlight.directive";
import {RendererHighlightDirective} from './directive/renderer-highlight.directive';
import {AppUnlessDirective} from './directive/app-unless.directive';
import {DropdownDirective} from './directive/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    BoxesComponent,
    OffersComponent,
    OffersListComponent,
    OfferDetailComponent,
    HeaderComponent,
    BookedListComponent,
    BasicHighlightDirective,
    RendererHighlightDirective,
    AppUnlessDirective,
    DropdownDirective
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
