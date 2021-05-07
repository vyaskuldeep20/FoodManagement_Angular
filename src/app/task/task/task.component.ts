import { Component, OnInit } from "@angular/core";
import { CommonDataService } from "src/app/common/common-data.service";
import { Task } from "../task";
import { Router } from '@angular/router';
import { TaskService } from "../task-service.service";
import { UserService } from "src/app/user/user-service.service";
import { ProjectService } from "src/app/project/project-service.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  constructor(private _commonDataService:CommonDataService,private _taskService:TaskService,private _userService:UserService,private _projectService:ProjectService, private router: Router) {
  }

  showAddTask: boolean = false;
  showTaskList: boolean = true;
  isUpdate: boolean = false;
  projectsList: Array<any> = [];
  usersList: Array<any> = [];
  statuses:Array<any>=[]

  tasks: Array<Task> = [];
  currentTask: Task = {};
  ngOnInit(): void {
  //  this.getData();
  this.getStatusList();
  this.getUsers();
  this.getProjects();
  this.getTasks();
  }
  

  getProjects(){
    this._projectService.getProjects().subscribe((data:any)=>{
      this.projectsList=data;
    });
  }

  getTasks(){
    this._taskService.getTasks().subscribe((data:any)=>{
      this.tasks=data;
    });
  }

  getUsers(){
    this._userService.getUsers().subscribe((data:any)=>{
      this.usersList=data;
      this.getTasks();
  })
  }

  getStatusList(){
    this._commonDataService.getStatuses().subscribe((data:any)=>{
      this.statuses=data;
      this.getUsers()
  })
  }
  OnAddTaskClick() {
    this.router.navigate(['home/AddTask'])
  }

  getUser(userId:any){
    return this.usersList.find(x=>x.id==userId).firstName;
  }

  getProject(projectId:any){
    return this.projectsList.find(x=>x.id==projectId).name;
  }

  

  getStatus(id:any){
    return this.statuses.find(x=>x.id==id).status;
  }

  

  

  ShowTaskList(isSubmit: boolean) {
    if (!isSubmit) {
      this.showAddTask = false;
      this.showTaskList = true;
    }
  }

  UpdateTask(task: Task) {
    this.router.navigate(['home/AddTask'],{ queryParams: { taskId: task.id } })
  }
  DeleteTask(task: Task) {
    this._taskService.deleteTask(task.id??-1).subscribe((success)=>{
      this.getTasks();
    });
  }
}
