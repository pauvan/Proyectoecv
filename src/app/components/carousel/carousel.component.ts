import { Component } from '@angular/core';
import { Sexo } from '../../models/sexo.model';
import { SexoService } from '../../../app/Services/sexo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  /**
   * Define el número mínimo de años para validar la edad del usuario.
   *
   * Esta constante se utiliza en la aplicación para calcular la fecha máxima permitida
   * en el campo de fecha de nacimiento, garantizando que solo se acepten usuarios
   * mayores de cierta edad.
   *
   * - Valor actual: 15, lo que significa que el usuario debe tener al menos 20 años.
   * - Es readonly, ya que no debe modificarse durante la ejecución.
   *
   * Cambiar este valor impactará en la restricción de edad mínima en el formulario.
   */
  readonly ANIOS_MINIMO: number = 15;
  /**
   *
   * Atributos
   *
   */
  /**
   * Atributos de la clase `DatosBasicosComponent`:
   *
   */

  /**
   * Fecha máxima permitida en el campo de fecha de nacimiento.
   *
   * Este atributo se calcula en función de la constante `ANIOS_MINIMO` y define la fecha
   * más reciente que un usuario puede seleccionar como fecha de nacimiento. Se inicializa
   * como una cadena vacía y se asigna en el método `calcularFechaMinima`.
   *
   * Formato esperado: 'YYYY-MM-DD'.
   */

  fechaMaxima: string = '';

  /**
   * Lista de opciones de sexo disponibles.
   *
   * Este arreglo contiene instancias de `Sexo`, que representan los diferentes sexos
   * que el usuario puede seleccionar. Se carga al inicializar el componente mediante el
   * método `cargarSexos`, que obtiene los datos desde `SexoService`.
   */
  sexos: Sexo[] = [];

  /**
   * Descripción del sexo seleccionado.
   *
   * Este atributo almacena la descripción textual del sexo seleccionado por el usuario.
   * Se utiliza para mostrar la selección del usuario en el formulario de manera descriptiva.
   *
   * Se inicializa como una cadena vacía y se actualiza cuando el usuario selecciona un sexo.
   */
  descripcionSexo: string = '';

  /**
   * Objeto que representa el sexo seleccionado por el usuario.
   *
   * Este atributo almacena la selección del usuario como una instancia de `Sexo`, o `null`
   * si no se ha realizado ninguna selección. Permite a la aplicación acceder fácilmente
   * a los detalles del sexo seleccionado.
   */
  sexoSeleccionado: Sexo | null = null;

  /**
   * Fecha de nacimiento del usuario.
   *
   * Este atributo almacena la fecha de nacimiento ingresada por el usuario en el formulario.
   * Se utiliza para realizar cálculos de edad y validar la elegibilidad del usuario.
   *
   * Formato esperado: 'YYYY-MM-DD'.
   */
  fechaNacimiento: string = '';
  /**
   * Métodos
   */

  /**
  * Métodos de la clase `DatosBasicosComponent`:
  *
  * - `constructor(private sexoService: SexoService)`: Inicializa el componente e inyecta el servicio
  *   `SexoService`, que se utiliza para obtener los datos de las opciones de sexo.

  */
  antecedenteSeleccionado: string = '';

  constructor(private sexoService: SexoService) {}

  /**
   * Método de ciclo de vida de Angular que se ejecuta al inicializar el componente.
   *
   * Este método carga la lista de opciones de sexo y calcula la fecha máxima permitida
   * para la fecha de nacimiento según el valor de `ANIOS_MINIMO`.
   */
  ngOnInit() {
    this.cargarSexos();
    this.calcularFechaMinima();
  }

  /**
   * Carga las opciones de sexo disponibles en el atributo `sexos`.
   *
   * Este método llama al servicio `SexoService` para obtener la lista de sexos
   * y la almacena en el atributo `sexos`, permitiendo al usuario seleccionar
   * su sexo en el formulario.
   */
  cargarSexos(): void {
    this.sexos = this.sexoService.obtenerSexos();
  }

  /**
   * Calcula la fecha máxima permitida para el campo de fecha de nacimiento.
   *
   * Utiliza la constante `ANIOS_MINIMO` para definir el año límite a partir del cual
   * un usuario es elegible. La fecha máxima se establece restando `ANIOS_MINIMO`
   * años de la fecha actual y se almacena en el atributo `fechaMaxima` en formato 'YYYY-MM-DD'.
   */
  calcularFechaMinima(): void {
    //Obtener la fecha actual en formato 'fechaMinima'YYY-MM-DD HH'
    const fechaActual = new Date();

    //Establecer la fecha al primero de enero del año actual
    const fechaBase = new Date(fechaActual.getFullYear(), 11, 31); //Mes 0 = enero, dia1

    //Restar 15 años
    fechaBase.setFullYear(fechaBase.getFullYear() - this.ANIOS_MINIMO);

    // Formatear la fecha como 'YYYY-MM-DD' y asignar a fechaMaxima
    this.fechaMaxima = fechaBase.toISOString().split('T')[0];
  }

  /**
   * Calcula la edad del usuario en función de la fecha de nacimiento ingresada.
   *
   * Este método convierte la fecha de nacimiento ingresada a un objeto `Date` y calcula
   * la diferencia en años con la fecha actual. Si el usuario aún no ha cumplido años
   * en el año actual, se ajusta la edad. Devuelve 0 si no se ha ingresado una fecha.
   *
   * @returns Edad del usuario en años.
   */
  calcularEdad(): number {
    if (!this.fechaNacimiento) {
      return 0;
    }
    const fechaNacimientoDate = new Date(this.fechaNacimiento);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    const mes = hoy.getMonth() - fechaNacimientoDate.getMonth();

    // Ajusta la edad si el cumpleaños de este año aún no ha pasado
    if (
      mes < 0 ||
      (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())
    ) {
      edad--;
    }
    return edad;
  }
  darAntecedenteSeleccionado(): string {
    return this.antecedenteSeleccionado;
  }
}
