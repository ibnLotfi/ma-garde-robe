import { inject, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private router = inject(Router);

  getNavigationRoutes(): Route[] {
    return this.router.config.filter((route) => route.data?.['title']);
  }
}
