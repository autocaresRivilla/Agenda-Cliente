import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http: HttpClient) { }

  get = (id:number=null) => {
    const url = environment.API_SERVER + '/agenda'+(id!=null?`/${id}`:'');
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UsuarioService.SESSIONSTORAGE_TOKEN)
      }),
    };
    return this.http.get(url, extra);

  }
  getByFecha = (fecha) => {
    const url = environment.API_SERVER + `/agenda/entradas/${fecha}`;
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UsuarioService.SESSIONSTORAGE_TOKEN),
      }),
    };
    return this.http.get(url, extra);
  }
  // Confirma una entrada de agenda
  confirmarEntrada = id => {
    const url = environment.API_SERVER + `/agenda/confirmar/${id}`;
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UsuarioService.SESSIONSTORAGE_TOKEN),
      }),
    };
    return this.http.put(url, extra);
  }

  // Elimina una entrada de agenda
  eliminarEntrada = id => {
    const url = environment.API_SERVER + `/agenda/${id}`;
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UsuarioService.SESSIONSTORAGE_TOKEN),
      }),
    };
    return this.http.delete(url, extra);
  }

  // Agrega una nueva entrada
  agregarEntrada = data => {
    const url = environment.API_SERVER + `/agenda`;
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UsuarioService.SESSIONSTORAGE_TOKEN),
      }),
    };
    return this.http.post(url, data, extra);

  }

  // Modifica una entrada existente
  modificarEntrada = (id,data) => {
    const url = environment.API_SERVER + `/agenda/${id}`;
    const extra = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer ' + sessionStorage.getItem(UsuarioService.SESSIONSTORAGE_TOKEN),
      }),
    };
    return this.http.put(url, data, extra);

  }
}
