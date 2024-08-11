import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { notes } from './notes-data';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notificacion: Notification | undefined;
  // public notes: Notification[] = [];
  public setNotes(notification: Notification){
    this.notificacion = notification ;   
  }
  public getNote(){
    return this.notificacion;
  }

  // public getNotes(): Note[] {
  //   return this.notes;
  // }
}
