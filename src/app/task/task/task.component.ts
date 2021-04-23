import { Component, OnInit } from "@angular/core";
import { CommonDataService } from "src/app/common/common-data.service";
import { Task } from "../task";
import { Router } from '@angular/router';

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  constructor(private _commonDataService:CommonDataService, private router: Router) {
    this.projectsList=this._commonDataService.getProjects;
    this.usersList=this._commonDataService.getUsers;
    this.tasks=this._commonDataService.getTasks;
    this.statuses=this._commonDataService.getStatus;
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
   
  }

  OnAddTaskClick() {
    this.router.navigate(['home/AddTask'])
  }

  getUser(userId:any){
    return this.usersList.find(x=>x.Id==userId).FirstName;
  }

  getProject(projectId:any){
    return this.projectsList.find(x=>x.Id==projectId).Name;
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
    this.router.navigate(['home/AddTask'],{ queryParams: { taskId: task.Id } })
  }
  DeleteTask(task: Task) {
    this._commonDataService.DeleteTask(task);
  }
}
