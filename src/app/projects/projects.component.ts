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
  //json object
    projects: any=[
        {
            row:[
                {
                    modal_theme:'one',
                    title:'aashitadesai.me',
                    img_url:'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    modal_theme: 'one',
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    modal_theme: 'one',
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    modal_theme: 'one',
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                }        
            ]
        },
        {
            row:[
                {
                    modal_theme: 'one',
                    title:'aashitadesai.me',
                    img_url:'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    modal_theme: 'one',
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
  }

  modal_close() {
    this.modal_theme += ' out';
  }

}


