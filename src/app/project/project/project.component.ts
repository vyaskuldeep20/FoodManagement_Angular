import { Component, OnInit } from "@angular/core";
import { Project } from "../project";
import { AddProjectComponent } from "../add-project/add-project.component";
import { CommonDataService } from "src/app/common/common-data.service";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  constructor(private _commonDataService: CommonDataService) {
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
    this.showAddProject = true;
    this.showProjectList = false;
    this.isUpdate = false;
    this.currentProject = {};
  }

  

  AddProject(newProject: Project) {
    const isProjectExists = this.projects.some((x) => x.Id === newProject.Id);
    if (isProjectExists) {
      this._commonDataService.UpdateProject(newProject);
    } else {
      this._commonDataService.AddProject(newProject)
    }
    this.showAddProject = false;
    this.showProjectList = true;
  }

  ShowProjectList(isSubmit: boolean) {
    if (!isSubmit) {
      this.showAddProject = false;
      this.showProjectList = true;
    }
  }

  UpdateProject(Project: Project) {
    this.currentProject = Project;
    this.showAddProject = true;
    this.showProjectList = false;
    this.isUpdate = true;
  }
  DeleteProject(project: Project) {
    this._commonDataService.DeleteProject(project);
  }
}
