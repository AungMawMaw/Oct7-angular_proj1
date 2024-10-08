import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAcceptDataComponent } from './input-accept-data.component';

describe('InputAcceptDataComponent', () => {
  let component: InputAcceptDataComponent;
  let fixture: ComponentFixture<InputAcceptDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAcceptDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAcceptDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
