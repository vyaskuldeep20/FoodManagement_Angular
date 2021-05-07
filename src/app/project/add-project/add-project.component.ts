import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../project';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonDataService } from 'src/app/common/common-data.service';
import { ProjectService } from '../project-service.service';

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

  

  constructor(private route: ActivatedRoute,private router:Router,private _projectService: ProjectService) {
  }

  

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let id=params['projectId'];
      if(id!=null){
        this.projectId = parseInt(id);
        this.isUpdate=true;
        this._projectService.getProjects().subscribe((data:any)=>{
          this.projects=data;
          this.newProject=this.projects.find(x=>x.id==this.projectId)??new Project();
        });
        
      }      
    });
  }
  AddProject(project: Project) {
   this._projectService.saveProject(project).subscribe((success)=>{
    this.router.navigate(['home/project']);
   })
    
  }
  CancelAddProject(){
    this.router.navigate(['home/project']);
  }

}
