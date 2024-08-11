import { Injectable } from '@angular/core';
import { Mensaje } from 'src/interfaces/mensajes';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private email: string;
  private mensaje: Mensaje ;
  private id: string;

  setEmail(email: string) {
    this.email = email;
  }

  getEmail(): string {
    return this.email;
  }
  setMesage(mensaje: Mensaje){
    this.mensaje = mensaje;
  }
  getMesage(){
    return this.mensaje;
  }
  deleteMensaje() {
    this.mensaje = { accion: '', message: '' , status: ''}; // Reinicializa a valor predeterminado
  }



  setUserEntityId(id: string){
    const identity = id.split(': ');
    console.log(id);
    this.id = identity[1];
    console.log(this.id);

  }
  getUserEntityId(){
    return this.id;
  }
  deleteUserEntityId() {
    this.id = '';
  }


}
