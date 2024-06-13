import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { pages } from './app.routes';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, pages],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Login-App';
}
