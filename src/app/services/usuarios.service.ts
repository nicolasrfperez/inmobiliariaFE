import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import IrepBackend from '../interfaces/IrespBackend';
import Iusuario from '../interfaces/Iusuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  rutaApi:string = "http://localhost:3000" 


  
  CrearUsuario(dataForm:{}){
    return this.http.post<IrepBackend>(`${this.rutaApi}/createUser`, dataForm,{})
  } 
//aca abajo noo se si es la misma varibale pq esta en sql y lo pase a odm
updateUsuarios(id_usuario:number,dataForm:{}){
  return this.http.put(`${this.rutaApi}/updateUsuario?ID_USUARIO=${id_usuario}`,dataForm,{})
}

getOneUsuario(id_usuario:Number):Observable<Iusuario>{
    
  return this.http.get<Iusuario>(`${this.rutaApi}/listarOneUser?ID_USUARIO=${id_usuario}`)

}
getusuarios():Observable<Iusuario[]>{
    //aca cambie la ruta de consultarUsuario a consultarUsuarios
  return this.http.get<Iusuario[]>(`${this.rutaApi}/consultarUsuarios`)
  
}
}
