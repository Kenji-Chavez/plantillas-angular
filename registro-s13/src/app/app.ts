import { Component } from '@angular/core';
import { FormularioPlantilla } from './formulario-plantilla/formulario-plantilla';
import { FormularioReactivo } from './formulario-reactivo/formulario-reactivo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioPlantilla, FormularioReactivo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }
