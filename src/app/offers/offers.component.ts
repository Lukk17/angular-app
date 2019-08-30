import { Component, OnInit } from '@angular/core';
import {Offer} from "./offer.model";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  bookedOffers = [
    new Offer('hilton', 'hotel', 'https://www3.hilton.com/resources/media/hi/HROBCHH/en_US/img/shared/full_page_image_gallery/main/HH_extsign_1270x560_FitToBoxSmallDimension_Center.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  bookOffer(offer: Offer) {
    this.bookedOffers.push(offer);
  }

  clearBooked() {
    this.bookedOffers = [];
  }
}
