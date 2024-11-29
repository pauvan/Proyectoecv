import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  hora: string = '30/11/2023';
  texto =
    signal(`"¡Hola a todos! Hoy quiero presentarles un proyecto en el que he estado trabajando: una Calculadora de Riesgo Cardiovascular. Esta herramienta fue diseñada para ayudar a evaluar la salud cardiovascular de manera rápida y sencilla, ofreciendo una experiencia intuitiva para los usuarios.

Para el desarrollo de este proyecto, utilizamos Angular como framework principal, lo que nos permitió estructurar la aplicación de forma modular y eficiente. Angular, con su capacidad de vinculación bidireccional de datos, facilitó el manejo de las entradas de usuario y la actualización dinámica de los resultados.

Por el lado del diseño, implementamos Bootstrap para lograr una interfaz atractiva, moderna y completamente responsiva. Gracias a esta herramienta, la calculadora se adapta perfectamente a diferentes tamaños de pantalla, asegurando que tanto usuarios en dispositivos móviles como en computadoras de escritorio puedan utilizarla sin problemas.

Entre sus características principales, la calculadora incluye formularios claros para recopilar datos relevantes, botones de selección rápida para respuestas de sí o no, y un diseño minimalista pero profesional que prioriza la usabilidad.

Estoy muy emocionado de compartir este proyecto con ustedes y espero que sea de gran utilidad. ¡Gracias por su atención y quedo atento a sus comentarios!"`);
}
