import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-plantilla',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-plantilla.html',
  styleUrl: './formulario-plantilla.scss'
})
export class FormularioPlantilla {
  estudiante = { nombre: '', correo: '', edad: null as number | null, carrera: '' };

  registro: { nombre: string; correo: string; edad: number | null; carrera: string } | null = null;

  guardar(): void {
    this.registro = { ...this.estudiante };
  }
}
