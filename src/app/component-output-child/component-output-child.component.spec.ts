import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOutputChildComponent } from './component-output-child.component';

describe('ComponentOutputChildComponent', () => {
  let component: ComponentOutputChildComponent;
  let fixture: ComponentFixture<ComponentOutputChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentOutputChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentOutputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
