import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from '../part/project/projects.component';
import {Project} from "../part/project/project";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  detailedProject: Project = new ProjectsComponent().projects[0];

  constructor() { }

  ngOnInit(): void {
  }

}
