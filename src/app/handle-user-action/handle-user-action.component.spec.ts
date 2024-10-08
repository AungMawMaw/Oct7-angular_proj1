import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleUserActionComponent } from './handle-user-action.component';

describe('HandleUserActionComponent', () => {
  let component: HandleUserActionComponent;
  let fixture: ComponentFixture<HandleUserActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandleUserActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleUserActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
