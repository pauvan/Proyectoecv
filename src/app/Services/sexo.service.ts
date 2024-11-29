import { Injectable } from '@angular/core';
import { Sexo } from '../models/sexo.model';
@Injectable({
  providedIn: 'root',
})
export class SexoService {
  private sexos: Sexo[] = [
    { descripcion: 'Masculino' },
    { descripcion: 'Femenino' },
    { descripcion: 'indeterminado' },
  ];
  obtenerSexos(): Sexo[] {
    return this.sexos;
  }
}
