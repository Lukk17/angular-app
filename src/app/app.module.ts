import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import {ExtrasComponent} from './extras/extras.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormComponent} from './form/form.component';
import {ReactiveFormComponent} from './form/reactive-form/reactive-form.component';
import {FirebaseComponent} from './firebase/firebase.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthComponent} from './auth/auth.component';
import {LoadingComponent} from './loading/loading.component';


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
    DropdownDirective,
    ExtrasComponent,
    FormComponent,
    ReactiveFormComponent,
    FirebaseComponent,
    AuthComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],

  // interceptors service must be provided here as below:
  // disable as it was interfering with login component
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
