import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckHeaderComponent } from './check-header.component';

describe('CheckHeaderComponent', () => {
  let component: CheckHeaderComponent;
  let fixture: ComponentFixture<CheckHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
