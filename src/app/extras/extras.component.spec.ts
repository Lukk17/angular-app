import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExtrasComponent} from './extras.component';
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ExtrasComponent', () => {
  let component: ExtrasComponent;
  let fixture: ComponentFixture<ExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        BrowserAnimationsModule
      ],
      declarations: [ ExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add object to last position on list', () => {
    fixture = TestBed.createComponent(ExtrasComponent);
    component = fixture.componentInstance;
    component.onAdd('test');
    expect(component.list[component.list.length-1]).toEqual('test')
  })
});
