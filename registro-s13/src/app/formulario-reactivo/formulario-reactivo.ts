import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reactivo.html',
  styleUrl: './formulario-reactivo.scss'
})
export class FormularioReactivo {
  formulario = new FormGroup({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4)]
    }),
    correo: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    edad: new FormControl<number | null>(null,
      [Validators.required, Validators.min(16), Validators.max(100)]),
    carrera: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  registro: { nombre: string; correo: string; edad: number | null; carrera: string } | null = null;

  guardar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    const valor = this.formulario.getRawValue();
    this.registro = { ...valor };
  }
}
