﻿import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//maps


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//flex
import { FlexLayoutModule } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { MaterialModule } from 'app/material-module/material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { WhoComponent } from './who/who.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { CoffeeComponent } from './who/coffee/coffee.component';
import { BeatlesComponent } from './who/beatles/beatles.component';
import { MeetupComponent } from './who/meetup/meetup.component';
import { RoboComponent } from './who/robo/robo.component';
import { BatmanComponent } from './who/batman/batman.component';
import { PhilatelyComponent } from './who/philately/philately.component';


@NgModule({
  
    declarations: [
    AppComponent,
    HomeComponent,
    ContactMeComponent,
    ErrorComponent,
    FooterComponent,
    ProjectsComponent,
    SkillsComponent,
    WhoComponent,
    ProjectDetailsComponent,
    CoffeeComponent,
    BeatlesComponent,
    MeetupComponent,
    RoboComponent,
    BatmanComponent,
    PhilatelyComponent
  ],
    
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
    
    entryComponents:[],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
