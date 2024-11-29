import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarouselComponent } from './components/carousel/carousel.component';

import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'main',
    component: CarouselComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
