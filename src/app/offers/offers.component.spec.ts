import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OffersComponent} from './offers.component';
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../shared/shared.module";
import {OffersRoutingModule} from "./offers-routing.module";
import {BookedListComponent} from "./booked-list/booked-list.component";
import {LoggingService} from "../services/logging.service";

describe('OffersComponent', () => {
  let component: OffersComponent;
  let fixture: ComponentFixture<OffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        OffersRoutingModule
      ],
      providers: [
        LoggingService,
      ],
      declarations: [ OffersComponent, BookedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
