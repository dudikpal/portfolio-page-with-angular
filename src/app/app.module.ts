import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './part/header/header.component';
import { HeroComponent } from './part/hero/hero.component';
import { AboutComponent } from './part/about/about.component';
import { SkillsComponent } from './part/skills/skills.component';
import { ResumeComponent } from './part/resume/resume.component';
import { ProjectsComponent } from './part/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ResumeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
