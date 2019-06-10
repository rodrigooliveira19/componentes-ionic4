import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaTabsPage } from './minha-tabs.page';

describe('MinhaTabsPage', () => {
  let component: MinhaTabsPage;
  let fixture: ComponentFixture<MinhaTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
