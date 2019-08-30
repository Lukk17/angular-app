import {Component, OnInit} from '@angular/core';
import {Offer} from "../offer.model";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  offers: Offer[] = [
    new Offer('Sheraton', 'hotel', 'https://www.sheratonsopot.pl/resourcefiles/home-content-section-image/sopot-view.jpg'),
    new Offer('Sheraton', 'hotel', 'https://www.sheratonsopot.pl/resourcefiles/home-content-section-image/sopot-view.jpg'),
    new Offer('hilton', 'hotel', 'https://www3.hilton.com/resources/media/hi/HROBCHH/en_US/img/shared/full_page_image_gallery/main/HH_extsign_1270x560_FitToBoxSmallDimension_Center.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  bookOffer(offer: Offer) {
    AppComponent.bookedRooms.push(offer);
  }
}
