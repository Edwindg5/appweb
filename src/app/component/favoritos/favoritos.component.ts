import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favorites: any[] = [];

  ngOnInit() {
    this.loadFavorites(); 
  }

  loadFavorites() {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  removeFromFavorites(index: number) {
    this.favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    alert('Producto eliminado de favoritos.');
  }
}
