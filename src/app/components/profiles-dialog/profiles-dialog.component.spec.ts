import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesDialogComponent } from './profiles-dialog.component';

describe('ProfilesDialogComponent', () => {
  let component: ProfilesDialogComponent;
  let fixture: ComponentFixture<ProfilesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
