import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCodeQuestionsComponent } from './no-code-questions.component';

describe('NoCodeQuestionsComponent', () => {
  let component: NoCodeQuestionsComponent;
  let fixture: ComponentFixture<NoCodeQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoCodeQuestionsComponent]
    });
    fixture = TestBed.createComponent(NoCodeQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
