import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTransaction, GetTransaction } from '../Models/getTransaction';
import { Login } from '../Models/Login';
import { Register } from '../Models/Register';


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private http: HttpClient) {

  }
  access(){
    if(sessionStorage.getItem('token') !== null && sessionStorage.getItem('token') !== ""){
      return true
    } else{
      return false
    }
  }
  handleSubmit(login: Login){
    return this.http.post(`http://localhost:8000/api/sign-in`, login);
  }
  registerSubmit(register: Register){
    return this.http.post(`http://localhost:8000/api/sign-up`, register);
  }
  getDetails(){
    return this.http.get<GetTransaction[]>(`http://localhost:8000/api/transaction`);
  }
  createLogistics(addLogistics: CreateTransaction){
    return this.http.post(`http://localhost:8000/api/logistics`, addLogistics);
  }
  updateLogistics(updateLogistics: CreateTransaction, id: string){
    return this.http.put(`http://localhost:8000/api/logistics/edit/${id}`, updateLogistics);
  }
  deleteLogistics(deleteId: any){
    return this.http.delete(`http://localhost:8000/api/transaction/delete/${deleteId}`);
  }
}
