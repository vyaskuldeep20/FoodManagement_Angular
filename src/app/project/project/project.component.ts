import { Component, OnInit } from "@angular/core";
import { Project } from "../project";
import { AddProjectComponent } from "../add-project/add-project.component";
import { CommonDataService } from "src/app/common/common-data.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  constructor(private _commonDataService: CommonDataService, private router: Router) {
  }

  showAddProject: boolean = false;
  showProjectList: boolean = true;
  isUpdate: boolean = false;

  projects: Array<Project> = [];
  currentProject: Project = {};
  ngOnInit(): void {
    this.projects=this._commonDataService.getProjects;
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
    this.router.navigate(['home/AddProject'],{ queryParams: { projectId: project.Id } })
  }
  DeleteProject(project: Project) {
    this._commonDataService.DeleteProject(project);
  }
}
