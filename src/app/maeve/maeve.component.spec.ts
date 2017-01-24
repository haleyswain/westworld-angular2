/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaeveComponent } from './maeve.component';

describe('MaeveComponent', () => {
  let component: MaeveComponent;
  let fixture: ComponentFixture<MaeveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaeveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
