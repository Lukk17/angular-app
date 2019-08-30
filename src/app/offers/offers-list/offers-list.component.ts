import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Offer} from "../offer.model";
import {AppComponent} from "../../app.component";
import {of} from "rxjs";

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  @Output() readyToBook = new EventEmitter<Offer>();

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
    this.readyToBook.emit(offer);
  }
}
