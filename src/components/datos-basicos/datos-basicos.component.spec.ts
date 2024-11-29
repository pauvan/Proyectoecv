import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosBasicosComponent } from './datos-basicos.component';

import { Sexo } from './Models/sexo.model';

describe('DatosBasicosComponent', () => {
  let component: DatosBasicosComponent;
  let fixture: ComponentFixture<DatosBasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosBasicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosBasicosComponent);
      component = fixture.componentInstance;
      /**
       * Crear un escenario con datos de prueba
       */
      component.fechaNacimiento = '1990-05-15';
      component.antecedenteSeleccionado = 'no';
      const masculino: Sexo = {
      descripcion: 'Masculino'
      };
component.sexoSeleccionado = masculino;
/** Fin del escenario */
fixture.detectChanges();
    fixture.detectChanges();
  });

  it('Debería calacular la edad y verificar que es mayor a 15 años', () =>{
    expect(component.calcularEdad()).toBeGreaterThan(15);
    })
    ;
  it('Debería retornar 0 al no tener una fecha de nacimiento', () => {
    component.fechaNacimiento = "";
    expect(component.calcularEdad()).toBe(0);
    })
    ;
  it('Debería el antecedente seleccionado esncontrarse dentro del rango sí, no, no sabe', () => {
    expect(["sí", "no", "no sabe"]).toContain(component.darAntecedenteSeleccionado());
    })
    ; 
  
});
