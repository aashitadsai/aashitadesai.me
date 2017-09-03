import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  @Input() data: any;
    
  img_source:string;
    
  constructor() { }

  ngOnInit() {
      console.log("Input DATA:",this.data);
      this.img_source = this.data.img_url;
      
  }
   
   modal_container_class: string = "out";
    modal_theme = "one";

    button_click() {
        this.modal_container_class = this.modal_theme;
    }

    modal_click() {
        this.modal_container_class = this.modal_theme + " out";
    }

}
