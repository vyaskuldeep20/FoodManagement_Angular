import { Component, OnInit } from "@angular/core";
import { Project } from "../project";
import { AddProjectComponent } from "../add-project/add-project.component";
import { CommonDataService } from "src/app/common/common-data.service";
import { Router } from '@angular/router';
import { ProjectService } from "../project-service.service";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  constructor(private _projectService: ProjectService, private router: Router) {
  }

  showAddProject: boolean = false;
  showProjectList: boolean = true;
  isUpdate: boolean = false;

  projects: Array<Project> = [];
  currentProject: Project = {};
  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe((data:any)=>{
      this.projects=data;
    });
  }
  OnAddProjectClick() {
    this.router.navigate(['home/AddProject'])
  }

  

 

  ShowProjectList(isSubmit: boolean) {
    if (!isSubmit) {
      this.showAddProject = false;
      this.showProjectList = true;
    }
  }

  UpdateProject(project: Project) {
    this.router.navigate(['home/AddProject'],{ queryParams: { projectId: project.id } })
  }
  DeleteProject(project: Project) {
    this._projectService.deleteProject(project.id??-1).subscribe((isSuccess)=>{
      this.getProjects();
    });
  }
}
