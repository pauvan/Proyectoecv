import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSaludComponent } from './registro-salud.component';

describe('RegistroSaludComponent', () => {
  let component: RegistroSaludComponent;
  let fixture: ComponentFixture<RegistroSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroSaludComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
