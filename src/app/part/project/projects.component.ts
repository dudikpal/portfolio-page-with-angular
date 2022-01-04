import { Component, OnInit } from '@angular/core';
import {projectList} from "./projectList";
import {Project} from "./project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor() {
    this.fillProjects();
  }

  ngOnInit(): void {

  }

  public getProjects(): Project[] {
    return this.projects;
  }

  fillProjects(): void {
    for (let project of projectList) {

      this.projects.push(
        new Project(
          <string>project[0],
          <string>project[1],
          <string[]>project[2],
          <string>project[3],
          <string>project[4],
          <string>project[5],
          <string>project[6],
          <string>project[7]
        )
      );
    }
  }

}
