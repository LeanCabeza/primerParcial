/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeladosComponent } from './helados.component';

describe('HeladosComponent', () => {
  let component: HeladosComponent;
  let fixture: ComponentFixture<HeladosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeladosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
