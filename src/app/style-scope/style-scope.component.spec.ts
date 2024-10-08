import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleScopeComponent } from './style-scope.component';

describe('StyleScopeComponent', () => {
  let component: StyleScopeComponent;
  let fixture: ComponentFixture<StyleScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleScopeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
