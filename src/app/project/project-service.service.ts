import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseURL="http://localhost:3001/projects"
  constructor(private http:HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  
getProjects(){
    return this.http.get(this.baseURL);
  }



saveProject(project:any){
  if(project.id){
    return this.http.put<Project>(this.baseURL+'/'+project.id,project)
  }
  else{
    return this.http.post<Project>(this.baseURL,project)
  }          
}

deleteProject(projectId:number){
  let url=this.baseURL+"/"+projectId
return this.http.delete(url, this.httpHeader);
}
}
