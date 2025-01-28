import { Component, inject } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private navigation = inject(NavigationService);

  routes: Route[] = [];

  ngOnInit(): void {
    this.routes = this.getRoutes();
    console.log(this.routes)
  }

  private getRoutes(): Route[] {
    console.log(this.navigation.getNavigationRoutes());
    return this.navigation.getNavigationRoutes();
  }

}
