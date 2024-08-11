import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Socio } from 'src/interfaces/socios.interfaz';
import { CookieService } from 'ngx-cookie-service';
import { Email, emailToken, passwordToken } from 'src/interfaces/email.interface';
import { Mensaje } from 'src/interfaces/mensajes';
import { DataService } from './data.service';
import { Gym } from 'src/interfaces/gym.interfaz';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static decrypt(arg0: string) {
    throw new Error('Method not implemented.');
  }
  private readonly secretKey = 'byteburst123'; // Cambia esto por tu clave secreta

  constructor(private http: HttpClient,
    private cookieService: CookieService,
    private dataService: DataService,
    
  ) { }

  signin(socio: Socio): Observable<any> {
    return this.http.post<Mensaje>(`${environment.apiUrlBase}/auth/associate`, socio).pipe(
      map(response => {
        if (response.status && response.message) {
          // El error tiene el formato esperado, crear un objeto de tipo Mensaje con los detalles del error
          const mensajeError: Mensaje = {
            status: response.status,
            message: response.message
          };
          this.dataService.setMesage(mensajeError);
          // Retornar el error de tipo Mensaje
          return throwError(mensajeError);
        } else {
          // Retornar la respuesta original si no hay error
          return response;
        }
      }),
      catchError(error => {
        // Capturar y manejar el error aquí
        console.error('Error en la solicitud de login:', error);
        // Verificar si el error tiene el formato esperado
        if (error.status  && error.error.errors) {
          // El error tiene el formato esperado, crear un objeto de tipo Mensaje con los detalles del error
          const mensajeError: Mensaje = {
            status: error.error.status,
            errors: error.error.errors
          };
          this.dataService.setMesage(mensajeError);
          // Retornar el error de tipo Mensaje
          return throwError(mensajeError);
        } else {
          // El error no tiene el formato esperado, retornar un mensaje genérico
          const mensajeError: Mensaje = {
            status: '500',
            message: 'Ocurrió un error desconocido al procesar la solicitud.'
          };
          return throwError(mensajeError);
        }
      })
    );
  }
  signinOwner(socio: Socio): Observable<any> {
    return this.http.post<Mensaje>(`${environment.apiUrlBase}/auth/owner`, socio,).pipe(
      map(response => {
        // Capturar el valor del header 'Location'
       
  
        // Acceder al cuerpo de la respuesta para obtener 'status' y 'message'
  
        if (response && response.status && response.message) {
          const mensajeError: Mensaje = {
            status: response.status,
            message: response.message
          };
          this.dataService.setMesage(mensajeError);
          if(mensajeError.message){

            this.dataService.setUserEntityId(mensajeError.message);
          }
          return throwError(mensajeError);
        } else {
          return response;
        }
      }),
      catchError(error => {
        console.error('Error en la solicitud de ss:', error);
        
        if (error.status && error.error && error.error.errors) {
          const mensajeError: Mensaje = {
            status: error.error.status,
            errors: error.error.errors
          };
          this.dataService.setMesage(mensajeError);
          return throwError(mensajeError);
        } else {
          const mensajeError: Mensaje = {
            status: '500',
            message: 'Ocurrió un error desconocido al procesar la solicitud.'
          };
          return throwError(mensajeError);
        }
      })
    );
  }
  
  
  signinOwnerGym(gym : Gym): Observable<any> {
    return this.http.post<Mensaje>(`${environment.apiUrlBase}/gym`, gym).pipe(
      map(response => {
        if (response.status && response.message) {
          // El error tiene el formato esperado, crear un objeto de tipo Mensaje con los detalles del error
          const mensajeError: Mensaje = {
            status: response.status,
            message: response.message
          };
          this.dataService.setMesage(mensajeError);
          // Retornar el error de tipo Mensaje
          return throwError(mensajeError);
        } else {
          // Retornar la respuesta original si no hay error
          return response;
        }
      }),
      catchError(error => {
        // Capturar y manejar el error aquí
        console.error('Error en la solicitud de login:', error);
        // Verificar si el error tiene el formato esperado
        if (error.status && error.error && error.error.errors) {
          // El error tiene el formato esperado, crear un objeto de tipo Mensaje con los detalles del error
          const mensajeError: Mensaje = {
            status: error.error.status,
            errors: error.error.errors
          };
          this.dataService.setMesage(mensajeError);
          // Retornar el error de tipo Mensaje
          return throwError(mensajeError);
        } else {
          // El error no tiene el formato esperado, retornar un mensaje genérico
          const mensajeError: Mensaje = {
            status: '500',
            message: 'Ocurrió un error desconocido al procesar la solicitud.'
          };
          return throwError(mensajeError);
        }
      })
    );
  }












  
  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${environment.apiUrlBase}/auth/login`, credentials)
      .pipe(
        map(response => {
          // Cifrar el token JWT antes de almacenarlo en la cookie
          // Añadir este console.log para verificar si el token se establece correctamente
          console.log('Token JWT establecido en AuthService:', response.tokenJWT);
          return response;
        }),
        catchError(error => {
          // Capturar y manejar el error aquí
          console.error('Error en la solicitud de login:', error);
          // Verificar si el error tiene el formato esperado
          if (error.status && error.error && error.error.errors) {
            // El error tiene el formato esperado, crear un objeto de tipo Mensaje con los detalles del error
            const mensajeError: Mensaje = {
              status: error.error.status,
              errors: error.error.errors
            };
            this.dataService.setMesage(mensajeError);
            // Retornar el error de tipo Mensaje
            return throwError(mensajeError);
          } else {
            // El error no tiene el formato esperado, retornar un mensaje genérico
            const mensajeError: Mensaje = {
              status: '500',
              message: 'Ocurrió un error desconocido al procesar la solicitud.'
            };
            return throwError(mensajeError);
          }
        })
      );
  }
  // loginEmail(token: string) {
    
  //         // Cifrar el token JWT antes de almacenarlo en la cookie
  //         const encryptedToken = this.encrypt(token.tokenJWT);
          
  //         document.cookie = `token=${encryptedToken}`;
  //         // Añadir este console.log para verificar si el token se establece correctamente
  //         console.log('Token JWT establecido en AuthService:', response.tokenJWT);
      

  // }



  sendEmail(email: Email): Observable<Email>{
    return this.http.post<any>(`${environment.apiUrlBase}/email/validate-email`,email )
    
  }
  veryEmail(token: emailToken): Observable<Mensaje>{
    return this.http.post<any>(`${environment.apiUrlBase}/token/validate-simple-token`,token )
    
  }
  changePassword(token: passwordToken): Observable<Mensaje>{
    return this.http.post<any>(`${environment.apiUrlBase}/auth/forgot-password`,token )
    
  }
  passwordEmail(email: Email): Observable<Mensaje>{
    return this.http.post<any>(`${environment.apiUrlBase}/email/change-password`,email )
    
  }

  logout(): void {
    // Eliminar la cookie del token JWT
    console.log('token se ba a borrar');
    this.cookieService.deleteAll();
    // document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }

  isLoggedIn(): boolean {
    // Comprobar si la cookie del token JWT está presente
    return document.cookie.includes('token');
  }

  

  decrypt(encryptedText: string): string {
    console.log("Texto cifrado recibido para descifrar:", encryptedText);
    
    // Descifrar utilizando AES
    
    console.log("Texto descifrado:", 'dfd');
    
    return 'ssfdf';
  }
  
}
