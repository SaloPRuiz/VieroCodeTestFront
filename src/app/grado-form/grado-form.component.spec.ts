import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradoFormComponent } from './grado-form.component';

describe('GradoFormComponent', () => {
  let component: GradoFormComponent;
  let fixture: ComponentFixture<GradoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
