import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BoxComponent} from './simpleBoxes/box/box.component';
import {BoxesComponent} from './simpleBoxes/boxes/boxes.component';
import {HeaderComponent} from './header/header.component';
import {DropdownDirective} from './directive/dropdown.directive';
import {ExtrasComponent} from './extras/extras.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormComponent} from './form/form.component';
import {ReactiveFormComponent} from './form/reactive-form/reactive-form.component';
import {FirebaseComponent} from './firebase/firebase.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthComponent} from './auth/auth.component';
import {LoadingComponent} from './loading/loading.component';
import {InterceptorService} from "./firebase/interceptor.service";
import {AuthGuard} from "./auth/auth.guard";
import {SharedModule} from "./shared/shared.module";
import {LoggingService} from "./services/logging.service";
import {OffersService} from "./services/offers.service";


@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    BoxesComponent,
    HeaderComponent,
    DropdownDirective,
    ExtrasComponent,
    FormComponent,
    ReactiveFormComponent,
    FirebaseComponent,
    AuthComponent,
    LoadingComponent,
  ],
  // component which is lazy loading cannot be imported here
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],

  // if added here to provider - service will be accessible by every child
  // as this is main class,
  // every component is child of it and will have access to this providers
  providers: [
    LoggingService,
    OffersService,
    // in interceptors authenticating token is added to every http request
    // interceptors service must be provided here as below:
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
