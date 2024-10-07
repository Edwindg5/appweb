import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  productForm: FormGroup;
  selectedImage: string | ArrayBuffer | null = null; 

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      description: [''],
      image: [null]  
    });
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;
      newProduct.image = this.selectedImage; 

      const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
      storedProducts.push(newProduct);
      localStorage.setItem('products', JSON.stringify(storedProducts));
      this.productForm.reset();
      this.selectedImage = null;

      console.log('Producto registrado: ', newProduct);
    }
  }
}
