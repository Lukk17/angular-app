import {Component, Input, OnInit, Output} from '@angular/core';
import {Offer} from "../offer.model";
import {LoggingService} from "../../services/logging.service";
import {Subject} from "rxjs";
import {OffersService} from "../../services/offers.service";

@Component({
  selector: 'app-booked-list',
  templateUrl: './booked-list.component.html',
  styleUrls: ['./booked-list.component.css'],
//  no providers for logger required as already was declared in app.component.ts
//  same instance will be injected in constructor here
})
export class BookedListComponent implements OnInit {
  hotelName = '';
  // this parameter can emmit an event which can be cough similar to (click) event
  @Output('bookedListClean') readyToClear = new Subject();
  // this parameter take input from component parameter in .html file when it was called
  // in offers.component.html
  @Input('bookedListOffers') bookedOffers = [];

  constructor(private logger: LoggingService, private offersService: OffersService) {
  }

  ngOnInit() {
  }

  onClearClick() {
    this.readyToClear.next();
  }

  onDeleteClick() {
    const indexNo = this.bookedOffers.findIndex((bookedRoom) => {
      return bookedRoom.name == this.hotelName;
    });
    if (indexNo >= 0) {
      this.bookedOffers.splice(indexNo, 1);
    }
  }


  onAddClick() {
    if (this.hotelName == 'hilton') {
      this.bookedOffers.push(new Offer('hilton', 'hotel', 'https://www3.hilton.com/resources/media/hi/HROBCHH/en_US/img/shared/full_page_image_gallery/main/HH_extsign_1270x560_FitToBoxSmallDimension_Center.jpg')
      );
      this.logger.log("Hilton Hotel added");
      this.offersService.bookedOfferSubject.next();
    } else if (this.hotelName == 'sheraton') {
      this.bookedOffers.push(new Offer('sheraton', 'hotel', 'https://www.sheratonsopot.pl/resourcefiles/home-content-section-image/sopot-view.jpg'),
      );
      this.logger.log("Sheraton Hotel added");
    } else {
      this.bookedOffers.push(new Offer(this.hotelName, 'unknown', 'http://www.dubaideluxe.pl/images/hotels/336/burj-al-arab-5.jpg'))
    }
  }

  emitOffer(bookedRoom: Offer) {
    this.offersService.bookedOfferSubject.next(bookedRoom);
    console.log("booked room emitted")
  }
}
