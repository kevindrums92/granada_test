import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateUserComponent } from './modalCreateUser.component';

describe('ModalComponent', () => {
  let component: ModalCreateUserComponent;
  let fixture: ComponentFixture<ModalCreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
