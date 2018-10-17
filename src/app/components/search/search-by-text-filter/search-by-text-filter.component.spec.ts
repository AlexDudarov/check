import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTextFilterComponent } from './search-by-text-filter.component';

describe('SearchByTextFilterComponent', () => {
  let component: SearchByTextFilterComponent;
  let fixture: ComponentFixture<SearchByTextFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByTextFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByTextFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
