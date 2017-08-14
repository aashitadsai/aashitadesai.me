import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  //json object
    projects: any=[
        {
            row:[
                {
                    title:'aashitadesai.me',
                    img_url:'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                }        
            ]
        },
        {
            row:[
                {
                    title:'aashitadesai.me',
                    img_url:'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                }       
            ]
        }
        
    ];
    
  ngOnInit() {
      console.log(this.projects);
  }


}

