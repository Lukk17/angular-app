import {Component, OnInit} from '@angular/core';
import {Offer} from "../offer.model";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-booked-list',
  templateUrl: './booked-list.component.html',
  styleUrls: ['./booked-list.component.css']
})
export class BookedListComponent implements OnInit {
  hotelName = '';
  bookedRooms = AppComponent.bookedRooms;

  constructor() {

  }

  ngOnInit() {
  }

  onClearClick() {
    this.bookedRooms = [];
  }

  onDeleteClick() {
    const indexNo = this.bookedRooms.findIndex((bookedRoom) => {
      return bookedRoom.name == this.hotelName;
    });
    if (indexNo >= 0) {
      this.bookedRooms.splice(indexNo, 1);
    }
  }


  onAddClick() {
    if (this.hotelName == 'hilton') {
      this.bookedRooms.push(new Offer('hilton', 'hotel', 'https://www3.hilton.com/resources/media/hi/HROBCHH/en_US/img/shared/full_page_image_gallery/main/HH_extsign_1270x560_FitToBoxSmallDimension_Center.jpg')
      )
    } else if (this.hotelName == 'sheraton') {
      this.bookedRooms.push(new Offer('sheraton', 'hotel', 'https://www.sheratonsopot.pl/resourcefiles/home-content-section-image/sopot-view.jpg'),
      )
    } else {
      this.bookedRooms.push(new Offer(this.hotelName, 'unknown', 'http://www.dubaideluxe.pl/images/hotels/336/burj-al-arab-5.jpg'))
    }
  }
}
