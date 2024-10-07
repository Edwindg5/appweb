import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appweb';
}
