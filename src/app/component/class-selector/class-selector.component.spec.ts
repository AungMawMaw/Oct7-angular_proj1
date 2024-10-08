import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSelectorComponent } from './class-selector.component';

describe('ClassSelectorComponent', () => {
  let component: ClassSelectorComponent;
  let fixture: ComponentFixture<ClassSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
