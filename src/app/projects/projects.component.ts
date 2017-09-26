import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  modal_data: string = null;
  //json object
    projects: any=[
        {
            row:[
                {
                    theme:'one',
                    title:'aashitadesai.me',
                    img_url:'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    theme: 'one',
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    theme: 'one',
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    theme: 'one',
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                }        
            ]
        },
        {
            row:[
                {
                    theme: 'one',
                    title:'aashitadesai.me',
                    img_url:'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    theme: 'one',
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                },
                {
                    theme: 'two',
                    title:"collectors' hub",
                    img_url: 'url(http://lumin8media.com/wp-content/uploads/2014/12/coding-screen.jpg)'
                }       
            ]
        }
        
    ];
    
  ngOnInit() {
      console.log(this.projects);
  }

  projectClick(project:any) {
      console.log("project modal open click");
      this.modal_data = project;
  }

}

