import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AddProjectComponent } from "./project/add-project/add-project.component";
import { ProjectComponent } from "./project/project/project.component";
import { AddTaskComponent } from "./task/add-task/add-task.component";
import { TaskComponent } from "./task/task/task.component";
import { AddUserComponent } from "./user/add-user/add-user.component";
import { UserComponent } from "./user/user/user.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "project", component: ProjectComponent },
      { path: "AddProject", component: AddProjectComponent },
      { path: "task", component: TaskComponent },
      { path: "AddTask", component: AddTaskComponent },
      { path: "user", component: UserComponent },
      { path: "AddUser", component: AddUserComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
