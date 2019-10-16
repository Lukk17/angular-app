import {Component} from '@angular/core';
import {LoggingService} from "./services/logging.service";
import {OffersService} from "./services/offers.service";

@Component({
  // this selector is used in index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // if added here to provider - service will be accessible by every child
  // as this is main class,
  // every component is child of it and will have access to this providers
  providers: [LoggingService, OffersService],
})
export class AppComponent {
  name = 'Sky';
}

// to create new component type in terminal (inside project dir)
// ng g c <componentName>
// or:
// ng generate component <componentName>

// with no test file:
// ng g c <componentName> --spec false

// inside existing folder:
// ng g c <existingFolder>/<newComponentName>

