import { Component, ElementRef, ViewChild } from '@angular/core';
import { PredictService } from '../../services/predict.service';

@Component({
  selector: 'app-predict',
  standalone: false,
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent {

  image: File | null = null;

  preview: string | null = null;

  result: any = null;

  resultEntries: [string, any][] = [];

  loading = false;

  dragOver = false;

  @ViewChild('fileInput')
  fileInput!: ElementRef<HTMLInputElement>;

  constructor(private predictService: PredictService) {}

  handleFile(file: File | null) {

    if (!file) return;

    if (!file.type.startsWith('image/')) return;

    this.image = file;

    this.preview = URL.createObjectURL(file);

    this.result = null;

    this.resultEntries = [];
  }

  handleImageChange(event: any) {

    const file = event.target.files[0];

    this.handleFile(file);
  }

  handleDrop(event: DragEvent) {

    event.preventDefault();

    this.dragOver = false;

    const file = event.dataTransfer?.files[0];

    if (file) {
      this.handleFile(file);
    }
  }

  handleSubmit() {

    if (!this.image) return;

    const formData = new FormData();

    formData.append('image', this.image);

    this.loading = true;

    this.predictService.predictImage(formData).subscribe({

      next: (data) => {

        this.result = data;

        this.resultEntries = Object.entries(data);

        this.loading = false;
      },

      error: (err) => {

        console.error(err);

        this.loading = false;
      }

    });
  }

  handleReset() {

    this.image = null;

    this.preview = null;

    this.result = null;

    this.resultEntries = [];

    this.loading = false;

    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

}