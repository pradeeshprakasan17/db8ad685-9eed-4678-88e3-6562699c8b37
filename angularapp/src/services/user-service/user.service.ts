import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user-service/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL="http://localhost:8090/api/v1/user";
  name: any;
  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<User[]>{
   return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
  addUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }
  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }
  updateUser(id: number,user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }
  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}