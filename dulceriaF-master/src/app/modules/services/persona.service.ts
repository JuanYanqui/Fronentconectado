import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';               
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Persona } from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = 'http://localhost:8080/api/persona';

  constructor(private http: HttpClient) { }

  getArticulo(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url+'/listarPersonas');
  }

  buscarArticulo(id: number):Observable<Persona>{
    return this.http.get<Persona>(this.url+'/buscarar/'+id);
  }

  crearArticulo(persona: Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url+'/guardarPersona', persona);
  }

  actalizarArticulo(persona: Persona):Observable<Persona>{
    return this.http.put<Persona>(this.url+'/actualizarar/'+ persona.id_persona, persona);
  }

}