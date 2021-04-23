import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../task";
import { Router,ActivatedRoute } from '@angular/router';
import { CommonDataService } from 'src/app/common/common-data.service';
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


  constructor(private route: ActivatedRoute,private router:Router,private _commonDataService: CommonDataService) {
    this.tasks=this._commonDataService.getTasks;
    this.projectDataList=this._commonDataService.getProjects;
    this.userDataList=this._commonDataService.getUsers;
    this.statuses=this._commonDataService.getStatus;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let id=params['taskId'];
      if(id!=null){
        this.taskId = parseInt(id);
        this.isUpdate=true;
        this.newTask=this.tasks.find(x=>x.Id==this.taskId)??new Task();
      }
      
    });
  }
  AddNewTask(task: Task) {
    const isTaskExists = this.tasks.some((x) => x.Id === task.Id);
    if (isTaskExists) {
      
      this._commonDataService.UpdateTask(task);
    } else {
      this._commonDataService.AddTask(task);
    }
    this.router.navigate(['home/task']);
  }
  CancelAddTask() {
    this.router.navigate(['home/task']);
  }
}
