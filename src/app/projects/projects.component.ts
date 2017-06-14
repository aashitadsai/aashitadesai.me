import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

    tiles = [
    {id:'collectors_hub' , text: 'Collectors Hub', cols: 1, rows: 3, color: '#232323'},
    {id:'aashitadesai_portfolio', text: 'aashitadesai.me', cols: 1, rows: 3, color: '#232323'},
    {id:'opiod_addiction_analysis', text: 'Opiod Addiction analysis', cols: 1, rows: 3, color: '#232323'},
    {id:'angular_offline', text: 'Angular Offline', cols: 1, rows: 3, color: '#232323'},
    {id:'hardware_store_management', text: 'Hardware Management System', cols: 1, rows: 3, color: '#232323'},
    {id:'automatic_job_post_notifier', text: 'Automatic Job Post Notifier', cols: 1, rows: 3, color: '#232323'},
    {id:'geo_coord_finder', text: 'Geo-Coordinates Finder', cols: 1, rows: 3, color: '#232323'},
    {id:'petrocard_system', text: 'RFID based PetroCard System', cols: 1, rows: 3, color: '#232323'},
];    
    
  ngOnInit() {
  }


}

