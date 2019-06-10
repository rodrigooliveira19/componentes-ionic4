import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEstabelecimentoPage } from './layout-estabelecimento.page';

describe('LayoutEstabelecimentoPage', () => {
  let component: LayoutEstabelecimentoPage;
  let fixture: ComponentFixture<LayoutEstabelecimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutEstabelecimentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutEstabelecimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
