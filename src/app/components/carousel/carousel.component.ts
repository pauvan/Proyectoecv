import { Component, OnInit } from '@angular/core';
import { Sexo } from '../../models/sexo.model';
import { SexoService } from '../../../app/Services/sexo.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  // Lista de programas académicos válidos

  programasValidos: string[] = [
    'Ingeniería de Sistemas',
    'Medicina',
    'Derecho',
    'Arquitectura',
    'Psicología',
  ];
  // Formulario reactivo
  programaAcademicoForm: FormGroup;

  constructor() {
    this.programaAcademicoForm = new FormGroup({
      programaAcademico: new FormControl('', [
        Validators.required,
        this.validarProgramaAcademico.bind(this),
      ]),
    });
  }
  ngOnInit(): void {}

  // Validador personalizado para comprobar si el programa académico está en la lista de programas válidos
  validarProgramaAcademico(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && !this.programasValidos.includes(value)) {
      return { programaInvalido: true };
    }
    return null; // Si el valor está en la lista de programas válidos, es válido
  }

  onSubmit() {
    if (this.programaAcademicoForm.valid) {
      alert('Formulario enviado exitosamente');
    } else {
      alert('Formulario no válido');
    }
  }
}
