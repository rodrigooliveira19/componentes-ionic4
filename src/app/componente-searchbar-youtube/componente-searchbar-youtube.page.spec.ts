import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSearchbarYoutubePage } from './componente-searchbar-youtube.page';

describe('ComponenteSearchbarYoutubePage', () => {
  let component: ComponenteSearchbarYoutubePage;
  let fixture: ComponentFixture<ComponenteSearchbarYoutubePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteSearchbarYoutubePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteSearchbarYoutubePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
