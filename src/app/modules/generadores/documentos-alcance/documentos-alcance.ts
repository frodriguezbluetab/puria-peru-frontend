import { Component, signal } from '@angular/core';
import { Select } from 'primeng/select';
import { FloatLabel } from "primeng/floatlabel"
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';
import { DocumentosAlcanceService } from './documentos-alcance.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-documentos-alcance',
  imports: [
    FloatLabel,
    Select,
    TextareaModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  templateUrl: './documentos-alcance.html',
  styleUrl: './documentos-alcance.scss',
})
export class DocumentosAlcance {

  constructor(
    private documentosAlcanceService: DocumentosAlcanceService
  ) {
    this.form = new FormGroup({
      tipo: new FormControl(null, [Validators.required]),
      archivo: new FormControl('', [Validators.required]),
      tabla: new FormControl('', [Validators.required]),
      propiedades: new FormControl('', [Validators.required]),
      matricula: new FormControl('', [Validators.required]),
    });
  }

  tipos: any[] = [];
  form: FormGroup;

  isDragging = signal<boolean>(false);
  
  // Nombre del archivo seleccionado (opcional, para mostrar feedback)
  fileName = signal<string | null>(null);
  fileSize = signal<number>(0);

  // Evento: Al arrastrar un archivo sobre la zona
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(true);
  }

  // Evento: Al salir de la zona de arrastre
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(false);
  }

  // Evento: Al soltar el archivo
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging.set(false);

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  // Al seleccionar manualmente con el input
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }

  // Procesamos el archivo
  private handleFile(file: File) {
    if (file.name.endsWith('.sql')) {
      this.fileName.set(file.name);
      this.fileSize.set(file.size);
      console.log('Archivo SQL cargado:', file);
    } else {
      alert('Por favor sube solo archivos .sql');
    }
  }

  getTipo() {
    this.documentosAlcanceService.getTipo().subscribe({
      next: (data) => {
        this.tipos = data;
      },
      error: (error) => {
        console.error('Error al obtener los tipos:', error);
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log('Formulario enviado:', formData);
    }
  }
}
