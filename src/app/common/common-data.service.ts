import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Project } from "../project/project";
import { Task } from "../task/task";
import { User } from "../user/user";
@Injectable()
export class CommonDataService {
  SharingData: Subject<any> = new Subject<any>();
  ProjectDataModule: Array<Project> = [];
  UserDataModule: Array<User> = [];
  TaskDataModule: Array<Task> = [];
  Statuses:Array<any> = [];

  constructor() {
    this.AddDummyUsers();
    this.AddDummyProjects();
    this.AddDummyTasks();
    this.AddDummyStatus();
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
  let userId=this.UserDataModule[this.UserDataModule.length-1].Id;
  user.Id=userId==null?0:userId+1;
  this.UserDataModule.push(user);
}

UpdateUser(user:User){
 const userIndex=this.UserDataModule.findIndex(x=>x.Id==user.Id);
 this.UserDataModule[userIndex]=user;
}

DeleteUser(user:User){
  const userIndex = this.UserDataModule.indexOf(user);
  this.UserDataModule.splice(userIndex, 1);
}

AddProject(project:Project){
  var today = new Date();
    var dateTime = today.getUTCFullYear() + "-" + (today.getUTCMonth()+1) + "-"+ today.getUTCDay();
  let projectId=this.ProjectDataModule[this.ProjectDataModule.length-1].Id;
  project.Id=projectId==null?0:projectId+1;
  project.CreatedOn=dateTime;
  this.ProjectDataModule.push(project);
}

UpdateProject(project:Project){
 const projectIndex=this.ProjectDataModule.findIndex(x=>x.Id==project.Id);
 this.ProjectDataModule[projectIndex]=project;
}

DeleteProject(project:Project){
  const projectIndex = this.ProjectDataModule.indexOf(project);
  this.ProjectDataModule.splice(projectIndex, 1);
}

AddTask(task:Task){
  var today = new Date();
  var dateTime = today.getUTCFullYear() + "-" + (today.getUTCMonth()+1) + "-"+ today.getUTCDay();
  let taskId=this.TaskDataModule[this.TaskDataModule.length-1].Id;
  task.Id=taskId==null?0:taskId+1;
  task.CreatedOn=dateTime;
  this.TaskDataModule.push(task);
}

UpdateTask(task:Task){
 const taskIndex=this.TaskDataModule.findIndex(x=>x.Id==task.Id);
 this.TaskDataModule[taskIndex]=task;
}

DeleteTask(task:Task){
  const taskIndex = this.TaskDataModule.indexOf(task);
  this.TaskDataModule.splice(taskIndex, 1);
}

  AddDummyUsers() {
    const newUser1: User = {
        Id: 101,
        FirstName: 'John',
        LastName: 'wick ' ,
        Email: 'john@outlook.in',
      }
      const newUser2: User = {
        Id: 102,
        FirstName: 'will',
        LastName: 'kass ',
        Email: 'will@outlook.in',
      }
      const newUser3: User = {
        Id: 103,
        FirstName: 'timothy',
        LastName: 'v ',
        Email: 'kass@outlook.in',
      }
      const newUser4: User = {
        Id: 104,
        FirstName: 'andrew',
        LastName: 'rit ',
        Email: 'andrew@outlook.in',
      }
      const newUser5: User = {
        Id: 105,
        FirstName: 'tim',
        LastName: 'paine ',
        Email: 'tim@outlook.in',
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
      Id: 1001,
      Name: "Branch Visit Tool",
      Detail: "Branch Visting Tool for auditing",
      CreatedOn: dateTime,
    }
     this.ProjectDataModule.push(newProject1);
     const newProject2: Project = {
      Id: 1002,
      Name: "JTransfer",
      Detail: "Transfer request tool for transfer to jaipur",
      CreatedOn: dateTime,
    }
     this.ProjectDataModule.push(newProject2);

     const newProject5: Project = {
      Id: 1005,
      Name: "Smarsh Manager",
      Detail: "Network Provider communication tool",
      CreatedOn: dateTime,
    }
     this.ProjectDataModule.push(newProject5);
     const newProject3: Project = {
      Id: 1003,
      Name: "XL-Catlin",
      Detail: "Insurance Application for transaction",
      CreatedOn: dateTime,
    }
     this.ProjectDataModule.push(newProject3);
     const newProject4: Project = {
      Id: 1004,
      Name: "My Mobile Health",
      Detail: "Mobile patch update notification tool",
      CreatedOn: dateTime,
    }
     this.ProjectDataModule.push(newProject4);
    
  }

  AddDummyTasks() {
    var today = new Date();
    var dateTime = today.getUTCFullYear() + "-" + (today.getUTCMonth()+1) + "-"+ today.getUTCDay();

      const newTask1: Task = {
        Id: 1,
        ProjectId: 1001,
        Detail: "Branch manager should be alerted once visit is registered.",
        CreatedOn: dateTime,
        Status:1,
        AssignedToUser:102
      };
      this.TaskDataModule.push(newTask1);
      const newTask2: Task = {
        Id: 2,
        ProjectId: 1003,
        Detail: "Jaipur Employee should not be able to apply request for transfer",
        CreatedOn: dateTime,
        Status:2,
        AssignedToUser:101
      };
      this.TaskDataModule.push(newTask2);
      const newTask3: Task = {
        Id: 3,
        ProjectId: 1005,
        Detail: "It should show fraud calls made from different telecom providers ",
        CreatedOn: dateTime,
        Status:3,
        AssignedToUser:105
      };
      this.TaskDataModule.push(newTask3);
      const newTask4: Task = {
        Id: 4,
        ProjectId: 1002,
        Detail: "Add functionality to make payment throgh bitcoin ",
        CreatedOn: dateTime,
        Status:4,
        AssignedToUser:103
      };
      this.TaskDataModule.push(newTask4);
      const newTask5: Task = {
        Id: 5,
        ProjectId: 1004,
        Detail: "Upgrade to ios14.5 ",
        CreatedOn: dateTime,
        Status:5,
        AssignedToUser:104
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
 