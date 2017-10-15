import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    constructor(
        private sanitizer: DomSanitizer
    ) { }
    modal_theme:string;
    modal_img: SafeUrl;
    modal_title:string;
    modal_description:string;
    modal_technologies: string[];
    modal_github: string;
    modal_link: string;

  //json object
    projects: any= [
        {
            row:[
                {
                    modal_theme:'two',
                    title:'aashitadesai.me',
                    img_url:'assets/images/port_main.jpg',
                    description: 'Personal Project, A professional portfolio developed in Angular 4. Functionalities: skills using D3.js, themed google maps',
                    technologies: 'Angular 4, TypeScript, D3.js, Angular Material, Angular Flex Layout, Google Maps API, JavaScript, node.js',
                    github:'https://github.com/aashitadsai/aashitadesai.me'
                },
                {
                    modal_theme: 'two',
                    title:"Collectors' Hub",
                    category:'Academic Project',
                    img_url: 'http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg',
                    link:'http://collectorshub.aashitadesai.me/'
                },
                {
                    modal_theme: 'two',
                    title:"collectors' hub",
                    img_url: 'http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg'
                },
                {
                    modal_theme: 'two',
                    title:"collectors' hub",
                    img_url: 'http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg'
                }        
            ]
        },
        {
            row:[
                {
                    modal_theme: 'two',
                    title:'aashitadesai.me',
                    img_url: 'http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg'
                },
                {
                    modal_theme: 'two',
                    title:"collectors' hub",
                    img_url: 'http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg'
                },
                {
                    modal_theme: 'two',
                    title:"collectors' hub",
                    img_url: 'http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg'
                }       
            ]
        }
        
    ];


  ngOnInit() {
      //console.log(this.projects);
  }

  modal_open(project:any){
    this.modal_theme = project.modal_theme;
    this.modal_title = project.title;
    this.modal_img = this.sanitizer.bypassSecurityTrustUrl(project.img_url);
    this.modal_description = project.description;
    this.modal_github = project.github;
    this.modal_link = project.link;
    this.modal_technologies = project.technologies.split(',');
  }

  modal_close() {
      this.modal_theme += ' out';

      this.modal_title = '';
      this.modal_img = '';
      this.modal_description = '';
      this.modal_github = '';
      this.modal_link = '';
      this.modal_technologies = [];
  }

}


