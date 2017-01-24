/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeloresComponent } from './delores.component';

describe('DeloresComponent', () => {
  let component: DeloresComponent;
  let fixture: ComponentFixture<DeloresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeloresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
