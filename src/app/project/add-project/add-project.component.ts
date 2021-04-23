import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../project';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonDataService } from 'src/app/common/common-data.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {

  projectId:any=null
  projects:Project[]=[];
  newProject:Project =new Project();
 isUpdate: boolean = false;

  

  constructor(private route: ActivatedRoute,private router:Router,private _commonDataService: CommonDataService) {
    this.projects=this._commonDataService.getProjects;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let id=params['projectId'];
      if(id!=null){
        this.projectId = parseInt(id);
        this.isUpdate=true;
        this.newProject=this.projects.find(x=>x.Id==this.projectId)??new Project();
      }      
    });
  }
  AddProject(project: Project) {
    const isProjectExists = this.projects.some((x) => x.Id === project.Id);
    if (isProjectExists) {
      this._commonDataService.UpdateProject(project);
    } else {
      this._commonDataService.AddProject(project)
    }
    this.router.navigate(['home/project']);
  }
  CancelAddProject(){
    this.router.navigate(['home/project']);
  }

}
