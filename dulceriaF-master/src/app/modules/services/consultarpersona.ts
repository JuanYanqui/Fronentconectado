import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Persona } from 'src/app/modules/models/persona';

@Injectable({
  providedIn: 'root'
})
export class BasePersonaService {

  constructor(private http: HttpClient) { }

  private urlFenix:string = 'http://localhost:8080/api/usuarios';
  private urlPersona:string = 'http://localhost:8080/api/persona';

  public consultarUser(cedula: string): Observable<Persona> {
    return this.http.get<Persona>(this.urlFenix + `/traerDatos/${cedula}`);
  }

  public consultarPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.urlPersona + `/buscarPersonaId/${id}`);
  }

  public traerIdArticulo(cedula: String): Observable<any> {
    return this.http.get(this.urlFenix + `/traerDatos/${cedula}`);
  }
}