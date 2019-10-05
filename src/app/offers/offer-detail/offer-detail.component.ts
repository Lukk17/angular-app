import {Component, OnInit} from '@angular/core';
import {Offer} from "../offer.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit {

  private offer: Offer;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.offer = new Offer(this.route.snapshot.params['name'], this.route.snapshot.params['desc'], 'https://www3.hilton.com/resources/media/hi/HROBCHH/en_US/img/shared/full_page_image_gallery/main/HH_extsign_1270x560_FitToBoxSmallDimension_Center.jpg')
  }

}
