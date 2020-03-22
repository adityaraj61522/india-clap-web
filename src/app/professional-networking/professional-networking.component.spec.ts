import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalNetworkingComponent } from './professional-networking.component';

describe('ProfessionalNetworkingComponent', () => {
  let component: ProfessionalNetworkingComponent;
  let fixture: ComponentFixture<ProfessionalNetworkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalNetworkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalNetworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
