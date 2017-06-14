import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor(private http:Http) { }
    
full_name:string;
email:string;
subject:string;
    
submit(form:any){
if(form.valid) {
    console.log(this.full_name + " " + this.email + " " + this.subject); 
    this.http.get('http://aashitadesai.me/email.php?full_name='+this.full_name+'&Email='+this.email+'&message='+this.subject)
    .toPromise()
    .then(res=>console.log('email sent'))
    .catch(error=>console.log('error'));
    }
    
}
    
  ngOnInit() {
  }

}
