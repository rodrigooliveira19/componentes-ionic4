import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNossaGeladaPage } from './layout-nossa-gelada.page';

describe('LayoutNossaGeladaPage', () => {
  let component: LayoutNossaGeladaPage;
  let fixture: ComponentFixture<LayoutNossaGeladaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutNossaGeladaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNossaGeladaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
