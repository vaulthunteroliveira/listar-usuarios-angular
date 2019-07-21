import { UserDTO } from "./../models/user.dto";
import { API_CONFIG } from "./../config/api.config";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class UserService {

  

  constructor(public http: HttpClient) {}

  findAll(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(`${API_CONFIG.baseUrl}users`);
  }
}
