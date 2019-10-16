import {Component, OnInit, Output} from '@angular/core';
import {Offer} from "../offer.model";
import {LoggingService} from "../../services/logging.service";
import {Subject} from "rxjs";
import {OffersService} from "../../services/offers.service";

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css'],
  //  if added here new instance of service will be crated
  //  if want one instance for all component add it only to main appcomponent and not its child as providers
  //  children should only have it in constructor
})
export class OffersListComponent implements OnInit {
  @Output() readyToBook = new Subject<Offer>();

  offers: Offer[] = [
    new Offer('Sheraton', 'hotel', 'https://www.sheratonsopot.pl/resourcefiles/home-content-section-image/sopot-view.jpg'),
    new Offer('Sheraton', 'hotel', 'https://www.sheratonsopot.pl/resourcefiles/home-content-section-image/sopot-view.jpg'),
    new Offer('hilton', 'hotel', 'https://www3.hilton.com/resources/media/hi/HROBCHH/en_US/img/shared/full_page_image_gallery/main/HH_extsign_1270x560_FitToBoxSmallDimension_Center.jpg')
  ];

  constructor(private logger: LoggingService, private service: OffersService) {
  }

  ngOnInit() {
  }

  bookOffer(offer: Offer) {
    this.readyToBook.next(offer);
    this.logger.log(offer.name + " booked");
  }
}
