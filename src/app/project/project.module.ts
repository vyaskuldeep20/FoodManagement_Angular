import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddProjectComponent } from './add-project/add-project.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './project-service.service';

@NgModule({
  imports: [CommonModule,BrowserModule, FormsModule,HttpClientModule],
  declarations: [ProjectComponent,AddProjectComponent],
  exports:[ProjectComponent],
  providers:[ProjectService] 
})
export class ProjectModule {}
