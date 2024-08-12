import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { login, Usuario, UsuarioResponse } from 'src/interfaces/usuario.interface';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private jwtToken: string ="";

  constructor(private http: HttpClient, private authService: AuthService, private cookieService: CookieService) {
     // Obtener el token al inicializar el servicio
  }

  todos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.apiUrlBase}/usuarios.controller.php?op=todos`);
  }

  get(id: string): Observable<Usuario> {
    const formData = new FormData();
    formData.append('id', id);
    return this.http.post<Usuario>(`${environment.apiUrlBase}/usuarios.controller.php?op=uno`, formData);
  }
  

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.apiUrlBase}/usuarios.controller.php?op=insertar`, usuario);
  };

  update(usuario: Usuario) {
    return this.http.put<Usuario>(`${environment.apiUrlBase}/usuarios.controller.php?op=actualizar`, usuario);
  };

  delete(id: string) {
    const formData = new FormData();
    formData.append('id', id);
    return this.http.post(`${environment.apiUrlBase}/usuarios.controller.php?op=eliminar`, formData);
  };

  login(nombreUsuario: String, Password: String): Observable<login> {
    const formData = new FormData();
    formData.append('nombreUsuario', nombreUsuario.toString());
    formData.append('Password', Password.toString());
    return this.http.post<login>(`${environment.apiUrlBase}/usuarios.controller.php?op=login`, formData);
  }

  isLoggedIn(): boolean {
    // Comprobar si la cookie del token JWT está presente
    return document.cookie.includes('token');
  }
  // getToken() {
  //   let token = this.cookieService.get('token');
  //   console.log(token);
  //   this.jwtToken = token;
  // }

  // private getHeaders(): HttpHeaders {
  //   // Depurar el token JWT para ver si se está obteniendo correctamente
  //   console.log("Token JWT antes de descifrar:", this.jwtToken);
  //   this.getToken();
  
  //   // Desencripta el token JWT
  //   let decryptedToken = '';
  //   try {
  //     console.log("Token JWT después de descifrar:", decryptedToken);
  //   } catch (error) {
  //     console.error("Error al descifrar el token JWT:", error);
  //   }
  
  //   let headers = new HttpHeaders();
  //   if (decryptedToken) {
  //     headers = headers.set('Authorization', `Bearer ${decryptedToken}`);
  //   }
  //   return headers;
  // }
}
