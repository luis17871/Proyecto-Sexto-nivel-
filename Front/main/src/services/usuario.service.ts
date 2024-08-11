import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Usuario, UsuarioResponse } from 'src/interfaces/usuario.interface';
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

  getPokemonList(page: number): Observable<UsuarioResponse> {
    return this.http.get<UsuarioResponse>(`${environment.apiUrlBase}/usuarios?page=${page}&size=10&sort=rol,asc`, { headers: this.getHeaders() });
  }

  get(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.apiUrlBase}/usuarios/${id}`, { headers: this.getHeaders() });
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.apiUrlBase}/usuarios`, usuario, { headers: this.getHeaders() });
  };

  update(usuario: Usuario) {
    return this.http.put<Usuario>(`${environment.apiUrlBase}/usuarios`, usuario, { headers: this.getHeaders() });
  };

  delete(id: string) {
    return this.http.delete(`${environment.apiUrlBase}/usuarios/${id}`, { headers: this.getHeaders() });
  };

  getToken() {
    let token = this.cookieService.get('token');
    console.log(token);
    this.jwtToken = token;
  }

  private getHeaders(): HttpHeaders {
    // Depurar el token JWT para ver si se está obteniendo correctamente
    console.log("Token JWT antes de descifrar:", this.jwtToken);
    this.getToken();
  
    // Desencripta el token JWT
    let decryptedToken = '';
    try {
      console.log("Token JWT después de descifrar:", decryptedToken);
    } catch (error) {
      console.error("Error al descifrar el token JWT:", error);
    }
  
    let headers = new HttpHeaders();
    if (decryptedToken) {
      headers = headers.set('Authorization', `Bearer ${decryptedToken}`);
    }
    return headers;
  }
}
