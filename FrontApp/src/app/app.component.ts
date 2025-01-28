import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from './footer/footer.component';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, ShoppingListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontApp';
}
