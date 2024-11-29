import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSaludComponent } from './formulario-salud.component';

describe('FormularioSaludComponent', () => {
  let component: FormularioSaludComponent;
  let fixture: ComponentFixture<FormularioSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioSaludComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
