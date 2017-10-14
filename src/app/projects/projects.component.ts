import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    constructor() { }
    modal_theme:string;
    modal_title:string;
    modal_category:string;
    modal_description:string;
    modal_functionalities:string;
    modal_technologies:string;

  //json object
    projects: any= [
        {
            row:[
                {
                    modal_theme:'two',
                    title:'aashitadesai.me',
                    category:'Personal Project',
                    img_url:'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)',
                    description: 'A professional portfolio developed in Angular 4.',
                    functionalities: 'Functionalities: skills using D3.js, themed google maps',
                    technologies: 'Technology: Angular 4, TypeScript, D3.js, Angular Material, Angular Flex Layout, Google Maps API, JavaScript, node.js'
                },
                {
                    modal_theme: 'two',
                    title:"Collectors' Hub",
                    category:'Academic Project',
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    modal_theme: 'two',
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    modal_theme: 'two',
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                }        
            ]
        },
        {
            row:[
                {
                    modal_theme: 'two',
                    title:'aashitadesai.me',
                    img_url:'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    modal_theme: 'two',
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    modal_theme: 'two',
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
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
    this.modal_category = project.category;
    this.modal_description = project.description;
    this.modal_functionalities = project.functionalities;
    this.modal_technologies = project.technologies;
  }

  modal_close() {
    this.modal_theme += ' out';
  }

}


