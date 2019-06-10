import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutInputPage } from './layout-input.page';

describe('LayoutInputPage', () => {
  let component: LayoutInputPage;
  let fixture: ComponentFixture<LayoutInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
