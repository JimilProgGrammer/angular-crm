import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmVisitsComponent } from './crm-visits.component';

describe('CrmVisitsComponent', () => {
  let component: CrmVisitsComponent;
  let fixture: ComponentFixture<CrmVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
