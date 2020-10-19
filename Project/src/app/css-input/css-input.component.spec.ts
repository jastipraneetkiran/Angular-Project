import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssInputComponent } from './css-input.component';

describe('CssInputComponent', () => {
  let component: CssInputComponent;
  let fixture: ComponentFixture<CssInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
