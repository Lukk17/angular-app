import {Component} from '@angular/core';
import {Offer} from "./offers/offer.model";

@Component({
  // this selector is used in index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Sky';
  static bookedRooms = [
    new Offer('hilton', 'hotel', 'https://www3.hilton.com/resources/media/hi/HROBCHH/en_US/img/shared/full_page_image_gallery/main/HH_extsign_1270x560_FitToBoxSmallDimension_Center.jpg')
  ];
}

// to create new component type in terminal (inside project dir)
// ng g c <componentName>
// or:
// ng generate component <componentName>

// with no test file:
// ng g c <componentName> --spec false

// inside existing folder:
// ng g c <existingFolder>/<newComponentName>

