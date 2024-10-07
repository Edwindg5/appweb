import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, HeaderComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productos: any[] = [];

  agregarProducto(producto: any) {
    this.productos.push(producto);
  }
}
