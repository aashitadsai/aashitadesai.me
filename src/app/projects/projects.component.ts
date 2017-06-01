import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

    tiles = [
    {text: '1', cols: 1, rows: 3, color: '#080808'},
    {text: '2', cols: 1, rows: 3, color: '#080808'},
    {text: '3', cols: 1, rows: 3, color: '#080808'},
    {text: '4', cols: 1, rows: 3, color: '#080808'},
    {text: '5', cols: 1, rows: 3, color: '#080808'},
    {text: '6', cols: 1, rows: 3, color: '#080808'},
    {text: '7', cols: 1, rows: 3, color: '#080808'},
    {text: '8', cols: 1, rows: 3, color: '#080808'},
];    
    
  ngOnInit() {
  }


}

