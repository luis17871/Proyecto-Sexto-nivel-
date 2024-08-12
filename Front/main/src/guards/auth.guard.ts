import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      // return this.router.createUrlTree(['/dashboards/dashboard1'], { queryParams: { returnUrl: state.url } });
      return true; // Permitir acceso a la ruta protegida

    } else {
      // Redirigir al inicio de sesión si el usuario no está autenticado
      return this.router.createUrlTree(['/authentication/login'], { queryParams: { returnUrl: state.url } });




      
    }
  }
}
