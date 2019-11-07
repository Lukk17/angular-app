import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookedListComponent} from './booked-list.component';
import {AppRoutingModule} from "../../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../shared/shared.module";
import {LoggingService} from "../../services/logging.service";

describe('BookedListComponent', () => {
  let component: BookedListComponent;
  let fixture: ComponentFixture<BookedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpClientModule,
        SharedModule
      ],
      providers: [
        LoggingService,
      ],
      declarations: [ BookedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
