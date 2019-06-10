import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPageInternoPage } from './modal-page-interno.page';

describe('ModalPageInternoPage', () => {
  let component: ModalPageInternoPage;
  let fixture: ComponentFixture<ModalPageInternoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPageInternoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPageInternoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
