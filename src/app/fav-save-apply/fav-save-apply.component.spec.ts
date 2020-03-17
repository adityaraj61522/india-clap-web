import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavSaveApplyComponent } from './fav-save-apply.component';

describe('FavSaveApplyComponent', () => {
  let component: FavSaveApplyComponent;
  let fixture: ComponentFixture<FavSaveApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavSaveApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavSaveApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
