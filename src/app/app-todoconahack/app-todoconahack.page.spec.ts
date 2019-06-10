import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTodoconahackPage } from './app-todoconahack.page';

describe('AppTodoconahackPage', () => {
  let component: AppTodoconahackPage;
  let fixture: ComponentFixture<AppTodoconahackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTodoconahackPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTodoconahackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
