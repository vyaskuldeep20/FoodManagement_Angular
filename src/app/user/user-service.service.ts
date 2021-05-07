import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseURL="http://localhost:3001/users"
  constructor(private http:HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  
getUsers(){
    return this.http.get(this.baseURL);
  }



saveUser(user:any){
  if(user.id){
    return this.http.put<User>(this.baseURL+'/'+user.id,user)
  }
  else{
    return this.http.post<User>(this.baseURL,user)
  }          
}

deleteUser(userId:number){
  let url=this.baseURL+"/"+userId
return this.http.delete(url, this.httpHeader);
}
}

  



