import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { MessageService } from './mesagges.service';
import { ApiRequestExample, ApiResponse, ChatStreamResponse, Classification, CohereChatRequest } from '../../interfaces/ia.interface';
import { MensajeIa } from '../../interfaces/messages';

@Injectable({
  providedIn: 'root'
})
export class CohereService {
  private apiUrl = 'https://api.cohere.com/v1/chat'; // URL de la API
  private apiUrl2 = 'https://api.cohere.ai/classify'; // URL de la API
  private iaclasificatios: Classification[] | undefined;

  private iaresponse: MensajeIa = { msg: '' }; // Inicializa iaresponse

  constructor(private http: HttpClient, private ia: MessageService) { }

  chatStream(request: CohereChatRequest): Observable<ChatStreamResponse> {
    return this.http.post<ChatStreamResponse>(`${this.apiUrl}`, request, { headers: this.getHeaders() }).pipe(
      map(response => {
        this.iaresponse.msg = response.text;
        this.ia.setMesage(this.iaresponse);
        return response;
      }),
      catchError(error => {
        console.error('Error en la solicitud de chat:', error);
        return throwError(() => new Error('Error en la solicitud de chat'));
      })
    );
  }
  category(request: ApiRequestExample): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl2}`, request, { headers: this.getHeaders() }).pipe(
      map(response => {
        this.iaclasificatios = response.classifications; // Sin los corchetes
        if (this.iaclasificatios.length > 0) {
          this.iaresponse.msg = this.iaclasificatios[0].prediction; // Ajustar según el campo que deseas
          this.ia.setMesage(this.iaresponse);
        }
        return response;
      }),
      catchError(error => {
        console.error('Error en la solicitud de clasificación:', error);
        return throwError(() => new Error('Error en la solicitud de clasificación'));
      })
    );
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer QmUkjpwLHIhYFfcCxlt7L4I3I1OtzFDnvaTT5p9B`);
    return headers;
  }
}
