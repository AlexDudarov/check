import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckFooterComponent } from './check-footer.component';

describe('CheckFooterComponent', () => {
  let component: CheckFooterComponent;
  let fixture: ComponentFixture<CheckFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
