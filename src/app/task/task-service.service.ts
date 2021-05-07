import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseURL="http://localhost:3001/tasks"
  constructor(private http:HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  
getTasks(){
    return this.http.get(this.baseURL);
  }



saveTask(task:any){
  if(task.id){
    return this.http.put<Task>(this.baseURL+'/'+task.id,task)
  }
  else{
    return this.http.post<Task>(this.baseURL,task)
  }          
}

deleteTask(taskId:number){
  let url=this.baseURL+"/"+taskId
return this.http.delete(url, this.httpHeader);
}
}
