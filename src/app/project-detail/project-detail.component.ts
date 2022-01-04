import {Component, Directive, OnInit} from '@angular/core';
import {Project} from "../part/project/project";
import {BaseService} from "../service/base.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {


  selectedProject!: Project;

  constructor(
    private baseService: BaseService
  ) { }

  ngOnInit(): void {
    this.baseService.subscribers.subscribe(data => {
      console.log(data);
    })
  }



  /*detailedProject(projectName: string) {
    for (const project of this.projects) {
      if (projectName === project.name) {
        this.selectedProject = project;
      }
    }
  }*/

}
