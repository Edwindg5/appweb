import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  products: any[] = [];
  isPriceAscending: boolean = true; 

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    this.products = storedProducts;
  }

  organizeByCategory() {
    this.products.sort((a, b) => a.category.localeCompare(b.category));
  }

  togglePriceOrder() {
    this.isPriceAscending = !this.isPriceAscending;
    this.products.sort((a, b) => {
      return this.isPriceAscending ? a.price - b.price : b.price - a.price;
    });
  }

  getPriceOrderButtonText(): string {
    return this.isPriceAscending ? 'Ordenar por precio: De menor a mayor' : 'Ordenar por precio: De mayor a menor';
  }
}
