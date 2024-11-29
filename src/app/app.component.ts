import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatosBasicosComponent } from '../components/datos-basicos/datos-basicos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatosBasicosComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : String = 'pry-rcv';
  version : String = '0.01';
}
