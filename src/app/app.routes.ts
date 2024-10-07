import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductosComponent } from './component/productos/productos.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { LoginComponent } from './component/login/login.component';  
import { FavoritosComponent } from './component/favoritos/favoritos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'login', component: LoginComponent }, 
  { path: 'productos', component: ProductosComponent },  
  { path: 'agregar-producto', component: FormularioComponent },
  { path: 'favoritos', component: FavoritosComponent },
];
