/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BadAccessComponent } from './bad-access.component';

describe('BadAccessComponent', () => {
  let component: BadAccessComponent;
  let fixture: ComponentFixture<BadAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
