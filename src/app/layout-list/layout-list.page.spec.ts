import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutListPage } from './layout-list.page';

describe('LayoutListPage', () => {
  let component: LayoutListPage;
  let fixture: ComponentFixture<LayoutListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
