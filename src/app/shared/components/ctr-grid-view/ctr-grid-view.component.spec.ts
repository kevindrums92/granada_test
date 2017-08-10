import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrGridViewComponent } from './ctr-grid-view.component';

describe('CtrGridViewComponent', () => {
  let component: CtrGridViewComponent;
  let fixture: ComponentFixture<CtrGridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtrGridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
