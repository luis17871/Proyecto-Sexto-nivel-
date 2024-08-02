import { Injectable } from '@angular/core';
import { MensajeIa } from '../../interfaces/messages';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private mensaje: MensajeIa = { msg: ''}; // Proporcionar un valor predeterminado

  setMesage(mensaje: MensajeIa) {
    this.mensaje = mensaje;
  }

  getMesage(): MensajeIa {
    return this.mensaje;
  }

  deleteMensaje() {
    this.mensaje = { msg: '' }; // Reinicializa a valor predeterminado
  }
}
