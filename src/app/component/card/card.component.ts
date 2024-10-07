import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product: any;

  constructor(private authService: AuthService) {}

  addToFavorites(product: any) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const productExists = favorites.find((item: any) => item.name === product.name);

    if (!productExists) {
      favorites.push(product);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(`${product.name} ha sido agregado a favoritos.`);
    } else {
      alert(`${product.name} ya está en favoritos.`);
    }
  }
  isAdmin(): boolean {
    return this.authService.isLoggedIn();
  }
  deleteProduct(product: any) {
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    const updatedProducts = storedProducts.filter((p: any) => p.name !== product.name);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    alert(`${product.name} ha sido eliminado.`);
    window.location.reload();
  }
}
