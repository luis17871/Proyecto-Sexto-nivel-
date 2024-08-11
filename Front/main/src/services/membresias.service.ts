import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Membresia, MembresiaResponse } from 'src/interfaces/membresias.interface';
@Injectable({
  providedIn: 'root'
})
export class MembresiasService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<MembresiaResponse> {
    return this.http.get<MembresiaResponse>(`${environment.apiUrlBase}/membresias`, {headers: this.getHeaders()});
  }
  get(id: string): Observable<Membresia> {
    return this.http.get<Membresia>(`${environment.apiUrlBase}/membresias/${id}`, {headers: this.getHeaders()});
  }
  create(membresia: Membresia) :  Observable<Membresia> {
    return this.http.post<Membresia>(`${environment.apiUrlBase}/membresias`, membresia, {headers: this.getHeaders()});
  };
  update( membresia: Membresia) {
    return this.http.put<Membresia>(`${environment.apiUrlBase}/membresias`, membresia, {headers: this.getHeaders()});
  };
  delete(id: string) {
    return this.http.delete(`${environment.apiUrlBase}/membresias/${id}`, {headers: this.getHeaders()});
  };
  private jwtToken: string | null = null;

  setToken(token: string) {
    this.jwtToken = token;
  }
  private getHeaders(): HttpHeaders {
    this.jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcHBneW0iLCJzdWIiOiJzZWJvbGluMjAwNEBnbWFpbC5jb20iLCJpZCI6IjkzZDZhZWE3LWFmYmYtNDNmZC1iMGU2LTQyNWY5NjM4OTY0MSIsInJvbCI6IkFETUlOSVNUUkFET1IiLCJleHAiOjE3MTQ2OTI2OTV9.D15ycJv-vNoWYnE7tFo9QQaJNZOSfLm98PgbPGToCNg";
    let headers = new HttpHeaders();
    if (this.jwtToken) {
      headers = headers.set('Authorization', `Bearer ${this.jwtToken}`);
    }
    return headers;
  }
}
