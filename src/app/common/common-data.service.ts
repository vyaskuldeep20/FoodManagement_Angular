import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Project } from "../project/project";
import { Task } from "../task/task";
import { User } from "../user/user";
@Injectable()
export class CommonDataService {
  baseUrl:string="http://localhost:3001/users?"
  SharingData: Subject<any> = new Subject<any>();
  ProjectDataModule: Array<Project> = [];
  UserDataModule: Array<User> = [];
  TaskDataModule: Array<Task> = [];
  Statuses:Array<any> = [];

  constructor(private http:HttpClient) {
    this.AddDummyUsers();
    this.AddDummyProjects();
    this.AddDummyTasks();
    this.AddDummyStatus();
  }

  getStatuses(){
    let url="http://localhost:3001/statuses"
    return this.http.get(url);
  }
  get getUsers(){
    return this.UserDataModule;
  }
get getProjects(){
  return this.ProjectDataModule
}
get getTasks(){
  return this.TaskDataModule
}

get getStatus(){
  return this.Statuses;
}

AddUser(user:User){
  let userId=this.UserDataModule[this.UserDataModule.length-1].id;
  user.id=userId==null?0:userId+1;
  this.UserDataModule.push(user);
}

AuthenticateUser(userId:string){
  let url=this.baseUrl+"email="+userId;
  return this.http.get(url);
}

UpdateUser(user:User){
 const userIndex=this.UserDataModule.findIndex(x=>x.id==user.id);
 this.UserDataModule[userIndex]=user;
}

DeleteUser(user:User){
  const userIndex = this.UserDataModule.indexOf(user);
  this.UserDataModule.splice(userIndex, 1);
}

AddProject(project:Project){
  var today = new Date();
    var dateTime = today.getUTCFullYear() + "-" + (today.getUTCMonth()+1) + "-"+ today.getUTCDay();
  let projectId=this.ProjectDataModule[this.ProjectDataModule.length-1].id;
  project.id=projectId==null?0:projectId+1;
  project.createdOn=dateTime;
  this.ProjectDataModule.push(project);
}

UpdateProject(project:Project){
 const projectIndex=this.ProjectDataModule.findIndex(x=>x.id==project.id);
 this.ProjectDataModule[projectIndex]=project;
}

DeleteProject(project:Project){
  const projectIndex = this.ProjectDataModule.indexOf(project);
  this.ProjectDataModule.splice(projectIndex, 1);
}

AddTask(task:Task){
  var today = new Date();
  var dateTime = today.getUTCFullYear() + "-" + (today.getUTCMonth()+1) + "-"+ today.getUTCDay();
  let taskId=this.TaskDataModule[this.TaskDataModule.length-1].id;
  task.id=taskId==null?0:taskId+1;
  task.createdOn=dateTime;
  this.TaskDataModule.push(task);
}

UpdateTask(task:Task){
 const taskIndex=this.TaskDataModule.findIndex(x=>x.id==task.id);
 this.TaskDataModule[taskIndex]=task;
}

DeleteTask(task:Task){
  const taskIndex = this.TaskDataModule.indexOf(task);
  this.TaskDataModule.splice(taskIndex, 1);
}

  AddDummyUsers() {
    const newUser1: User = {
        id: 101,
        firstName: 'John',
        lastName: 'wick ' ,
        email: 'john@outlook.in',
      }
      const newUser2: User = {
        id: 102,
        firstName: 'will',
        lastName: 'kass ',
        email: 'will@outlook.in',
      }
      const newUser3: User = {
        id: 103,
        firstName: 'timothy',
        lastName: 'v ',
        email: 'kass@outlook.in',
      }
      const newUser4: User = {
        id: 104,
        firstName: 'andrew',
        lastName: 'rit ',
        email: 'andrew@outlook.in',
      }
      const newUser5: User = {
        id: 105,
        firstName: 'tim',
        lastName: 'paine ',
        email: 'tim@outlook.in',
      }

      this.UserDataModule.push(newUser1);
      this.UserDataModule.push(newUser2);
      this.UserDataModule.push(newUser3);
      this.UserDataModule.push(newUser4);
      this.UserDataModule.push(newUser5);
    }

  AddDummyProjects() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;

    const newProject1: Project = {
      id: 1001,
      name: "Branch Visit Tool",
      detail: "Branch Visting Tool for auditing",
      createdOn: dateTime,
    }
     this.ProjectDataModule.push(newProject1);
     const newProject2: Project = {
      id: 1002,
      name: "JTransfer",
      detail: "Transfer request tool for transfer to jaipur",
      createdOn: dateTime,
    }
     this.ProjectDataModule.push(newProject2);

     const newProject3: Project = {
      id: 1003,
      name: "XL-Catlin",
      detail: "Insurance Application for transaction",
      createdOn: dateTime,
    }
     this.ProjectDataModule.push(newProject3);
     const newProject4: Project = {
      id: 1004,
      name: "My Mobile Health",
      detail: "Mobile patch update notification tool",
      createdOn: dateTime,
    }
     this.ProjectDataModule.push(newProject4);
     const newProject5: Project = {
      id: 1005,
      name: "Smarsh Manager",
      detail: "Network Provider communication tool",
      createdOn: dateTime,
    }
     this.ProjectDataModule.push(newProject5);
    
  }

  AddDummyTasks() {
    var today = new Date();
    var dateTime = today.getUTCFullYear() + "-" + (today.getUTCMonth()+1) + "-"+ today.getUTCDay();

      const newTask1: Task = {
        id: 1,
        projectId: 1001,
        detail: "Branch manager should be alerted once visit is registered.",
        createdOn: dateTime,
        status:1,
        assignedToUser:102
      };
      this.TaskDataModule.push(newTask1);
      const newTask2: Task = {
        id: 2,
        projectId: 1003,
        detail: "Jaipur Employee should not be able to apply request for transfer",
        createdOn: dateTime,
        status:2,
        assignedToUser:101
      };
      this.TaskDataModule.push(newTask2);
      const newTask3: Task = {
        id: 3,
        projectId: 1005,
        detail: "It should show fraud calls made from different telecom providers ",
        createdOn: dateTime,
        status:3,
        assignedToUser:105
      };
      this.TaskDataModule.push(newTask3);
      const newTask4: Task = {
        id: 4,
        projectId: 1002,
        detail: "Add functionality to make payment throgh bitcoin ",
        createdOn: dateTime,
        status:4,
        assignedToUser:103
      };
      this.TaskDataModule.push(newTask4);
      const newTask5: Task = {
        id: 5,
        projectId: 1004,
        detail: "Upgrade to ios14.5 ",
        createdOn: dateTime,
        status:5,
        assignedToUser:104
      };
      this.TaskDataModule.push(newTask5);
    
  }


  AddDummyStatus(){
    this.Statuses.push({id:1,status:"Approved"});
    this.Statuses.push({id:2,status:"Dev Implementation"});
    this.Statuses.push({id:3,status:"Pending"});
    this.Statuses.push({id:4,status:"Testing"});
    this.Statuses.push({id:5,status:"In Business Specification"});
  }
  
}
 