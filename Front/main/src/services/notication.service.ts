// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
// import { Mensaje } from 'src/interfaces/mensajes';
// import { DataService } from './data.service';
// import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
// import { CustomSnackBarComponent } from '../pages/authentication/side-login/CustomSnackBar.component';

// @Injectable({
//   providedIn: 'root',
// })
// export class NotificationService {
//     constructor(private http: HttpClient,
//         private cookieService: CookieService,
//         private dataService: DataService,
//     private _snackBar: MatSnackBar // Declaración de _snackBar

//       ) { }
// message: Mensaje;
 
//   openSnackBar() {
//     this.message = this.dataService.getMesage();
    
  
//     const horizontalPosition: MatSnackBarHorizontalPosition = 'end';
//     const verticalPosition: MatSnackBarVerticalPosition ='bottom';
    
//     if(this.message){
//       if(this.message.errors){
//         switch (this.message.errors[0]) {
//           case "Credenciales incorrectas.": 
//             this._snackBar.openFromComponent(CustomSnackBarComponent, {
//               data: { accion: "Credenciales Incorrectas", message: "El nombre de usuario o la contrasenia son incorrectas", logo: 'alert-circle' },
//               duration: 5000,
//               horizontalPosition: horizontalPosition,
//               verticalPosition: verticalPosition
//             });
//             break;
//           case "Email no verificado.": 
//             this._snackBar.openFromComponent(CustomSnackBarComponent, {
//               data: { accion: "Correo no verificado", message: "Verifica tu correo electrinco", logo: 'alert-circle' },
//               duration: 5000,
//               horizontalPosition: horizontalPosition,
//               verticalPosition: verticalPosition
//             });
            
//             break;
//             case "Este email ya existe": 
//             this._snackBar.openFromComponent(CustomSnackBarComponent, {
//               data: { accion: "Usuario Invalido", message: "Ya existe un usuario con ese correo", logo: 'alert-circle' },
//               duration: 5000,
//               horizontalPosition: horizontalPosition,
//               verticalPosition: verticalPosition
//             });
//             break;
//             case "El token ha expirado.": 
//             this._snackBar.openFromComponent(CustomSnackBarComponent, {
//               data: { accion: "Se Acabo el tiempo", message: "El tiempo para el cambio termino vuelve a intentarlo ", logo: 'alert-circle' },
//               duration: 5000,
//               horizontalPosition: horizontalPosition,
//               verticalPosition: verticalPosition
//             });
//             break;
//             case "Email no existe, cree una cuenta.": 
//             this._snackBar.openFromComponent(CustomSnackBarComponent, {
//               data: { accion: "Email invalido", message: "El email ingresado no existe", logo: 'alert-circle' },
//               duration: 5000,
//               horizontalPosition: horizontalPosition,
//               verticalPosition: verticalPosition
//             });
//             break;
//           default:
            
            
//               // Manejo de otros mensajes no específicos
//               this._snackBar.openFromComponent(CustomSnackBarComponent, {
//                 data: { accion: "Error", message: "Algo raro paso", logo: 'alert-circle' },
                
//                 duration: 5000,
//                 horizontalPosition: horizontalPosition,
//                 verticalPosition: verticalPosition
//               });
//               break;
          
//         }
        
          
       
         
        
//       }
//       if(this.message.message){
//         switch(this.message.message){
//         case "Token validado correctamente.":
//           this._snackBar.openFromComponent(CustomSnackBarComponent, {
//             data: { accion: "Usuario Verificado", message: "has verificado tu correo exitosamente" , logo: 'check'},
//             duration: 5000,
//             horizontalPosition: horizontalPosition,
//             verticalPosition: verticalPosition
//           });
//           break;          
//         case "La contraseña ha sido actualizada.":
//           this._snackBar.openFromComponent(CustomSnackBarComponent, {
//             data: { accion: "Contraseña actualizada", message: "has cambiado tu Contraseña exitosamente" , logo: 'check'},
//             duration: 5000,
//             horizontalPosition: horizontalPosition,
//             verticalPosition: verticalPosition
//           });
//           break;          
//           default:
//             console.log(this.message.message)
//             if(this.message.message.includes('se ha creado exitosamente.')){
//               this._snackBar.openFromComponent(CustomSnackBarComponent, {
//                 data: { accion: "Usuario Creado", message: "El usuario se ha creado exitosamente" , logo: 'check'},
//                 duration: 5000,
//                 horizontalPosition: horizontalPosition,
//                 verticalPosition: verticalPosition
//               });
//             } else{

//               this._snackBar.openFromComponent(CustomSnackBarComponent, {
//                 data: { accion: "Error", message: "Algo salio mal" , logo: 'alert-circle'},
//                 duration: 5000,
//                 horizontalPosition: horizontalPosition,
//                 verticalPosition: verticalPosition
//               });
//             }
//             break;
//         }
        

//       }
//     }
//     this.dataService.deleteMensaje();
//   }
// }
