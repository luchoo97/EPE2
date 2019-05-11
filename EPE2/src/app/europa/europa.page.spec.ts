import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropaPage } from './europa.page';

describe('EuropaPage', () => {
  let component: EuropaPage;
  let fixture: ComponentFixture<EuropaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
