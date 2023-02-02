import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppWizardComponent } from './new-app-wizard.component';

describe('NewAppWizardComponent', () => {
  let component: NewAppWizardComponent;
  let fixture: ComponentFixture<NewAppWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAppWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAppWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
