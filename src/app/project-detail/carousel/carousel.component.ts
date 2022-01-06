import { Component, OnInit } from '@angular/core';
import {BaseService} from "../../service/base.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images!: string[];

  constructor(
    private baseService: BaseService
  ) {
  }

  ngOnInit(): void {
    this.images = this.baseService.selectedProject.images;
    console.log(this.images)
  }

}
