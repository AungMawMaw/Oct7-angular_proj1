import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionInHtmlComponent } from './condition-in-html.component';

describe('ConditionInHtmlComponent', () => {
  let component: ConditionInHtmlComponent;
  let fixture: ComponentFixture<ConditionInHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionInHtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionInHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
