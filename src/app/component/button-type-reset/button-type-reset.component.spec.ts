import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTypeResetComponent } from './button-type-reset.component';

describe('ButtonTypeResetComponent', () => {
  let component: ButtonTypeResetComponent;
  let fixture: ComponentFixture<ButtonTypeResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTypeResetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTypeResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
