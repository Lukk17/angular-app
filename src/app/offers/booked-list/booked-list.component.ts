import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Offer} from "../offer.model";
import {LoggingService} from "../../services/logging.service";

@Component({
  selector: 'app-booked-list',
  templateUrl: './booked-list.component.html',
  styleUrls: ['./booked-list.component.css']
//  no providers for logger required as already was declared in app.component.ts
//  same instance will be injected in constructor here
})
export class BookedListComponent implements OnInit {
  hotelName = '';
  // this parameter can emmit an event which can be cough similar to (click) event
  @Output('bookedListClean') readyToClear = new EventEmitter();
  // this parameter take input from component parameter in .html file when it was called
  @Input('bookedListOffers') bookedOffers = [];

  constructor(private logger: LoggingService) {

  }

  ngOnInit() {
  }

  onClearClick() {
    this.readyToClear.emit();
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
    } else if (this.hotelName == 'sheraton') {
      this.bookedOffers.push(new Offer('sheraton', 'hotel', 'https://www.sheratonsopot.pl/resourcefiles/home-content-section-image/sopot-view.jpg'),
      );
      this.logger.log("Sheraton Hotel added");
    } else {
      this.bookedOffers.push(new Offer(this.hotelName, 'unknown', 'http://www.dubaideluxe.pl/images/hotels/336/burj-al-arab-5.jpg'))
    }
  }

}
