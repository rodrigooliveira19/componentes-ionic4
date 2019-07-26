import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMediaCaptureIonicAcademyPage } from './comp-media-capture-ionic-academy.page';

describe('CompMediaCaptureIonicAcademyPage', () => {
  let component: CompMediaCaptureIonicAcademyPage;
  let fixture: ComponentFixture<CompMediaCaptureIonicAcademyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompMediaCaptureIonicAcademyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMediaCaptureIonicAcademyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
