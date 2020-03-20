import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveJobSearchComponent } from './archive-job-search.component';

describe('ArchiveJobSearchComponent', () => {
  let component: ArchiveJobSearchComponent;
  let fixture: ComponentFixture<ArchiveJobSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveJobSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveJobSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
