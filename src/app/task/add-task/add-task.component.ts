import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../task";
import { Router,ActivatedRoute } from '@angular/router';
import { CommonDataService } from 'src/app/common/common-data.service';
import { ProjectService } from "src/app/project/project-service.service";
import { UserService } from "src/app/user/user-service.service";
import { TaskService } from "../task-service.service";
@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"],
})
export class AddTaskComponent implements OnInit {
  tasks:Task[]=[];
  taskId:any=null;
  @Input() newTask: Task = {};
  @Input() isUpdate: boolean = false;
  projectDataList: Array<any> = [];
  userDataList: Array<any> = [];
  statuses: Array<any> = [];

  constructor(private route: ActivatedRoute,private router:Router,private _commonDataService:CommonDataService,private _taskService:TaskService,private _userService:UserService,private _projectService:ProjectService) {
  }


  ngOnInit(): void {
    this.getStatusList();
  this.getUsers();
  this.getProjects();
  this.getTasks();
    this.route.queryParams.subscribe(params => {
      let id=params['taskId'];
      if(id!=null){
        this.taskId = parseInt(id);
        this.isUpdate=true;
        this._taskService.getTasks().subscribe((data:any)=>{
          this.tasks=data;
          this.newTask=this.tasks.find(x=>x.id==this.taskId)??new Task();
        });
        
      }
      
    });
  }

  getProjects(){
    this._projectService.getProjects().subscribe((data:any)=>{
      this.projectDataList=data;
    });
  }

  getTasks(){
    this._taskService.getTasks().subscribe((data:any)=>{
      this.tasks=data;
    });
  }

  getUsers(){
    this._userService.getUsers().subscribe((data:any)=>{
      this.userDataList=data;
      this.getTasks();
  })
  }

  getStatusList(){
    this._commonDataService.getStatuses().subscribe((data:any)=>{
      this.statuses=data;
      this.getUsers()
  })
  }
  AddNewTask(task: Task) {
    this._taskService.saveTask(task).subscribe((success)=>{
      this.router.navigate(['home/task']);
    })
    
  }
  CancelAddTask() {
    this.router.navigate(['home/task']);
  }
}
