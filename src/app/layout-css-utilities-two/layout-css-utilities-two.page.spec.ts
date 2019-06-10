import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCssUtilitiesTwoPage } from './layout-css-utilities-two.page';

describe('LayoutCssUtilitiesTwoPage', () => {
  let component: LayoutCssUtilitiesTwoPage;
  let fixture: ComponentFixture<LayoutCssUtilitiesTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCssUtilitiesTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCssUtilitiesTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
