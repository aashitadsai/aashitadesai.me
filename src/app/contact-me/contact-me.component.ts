import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor() { }
    
full_name:string;
email:string;
subject:string;
    
submit(form:any) {
if(form.valid) {
    console.log(this.full_name + " " + this.email + " " + this.subject); 
    }
    
}
    
  ngOnInit() {
  }

}
