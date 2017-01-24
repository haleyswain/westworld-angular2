/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BernardComponent } from './bernard.component';

describe('BernardComponent', () => {
  let component: BernardComponent;
  let fixture: ComponentFixture<BernardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BernardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BernardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
