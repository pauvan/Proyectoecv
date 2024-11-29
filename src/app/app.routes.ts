
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatosBasicosComponent } from '../components/datos-basicos/datos-basicos.component';
import { RegistroSaludComponent } from './components/registro-salud/registro-salud.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import path from 'path';
import { FormularioSaludComponent } from './components/formulario-salud/formulario-salud.component';

export const routes: Routes = [
    {
        path:'datoss',
        component:RegistroSaludComponent
    },
    {
        path:'registro',
        component:CarouselComponent
    },
    {
        path:'formulario',
        component:FormularioSaludComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}