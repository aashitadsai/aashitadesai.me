import { Component, OnInit, Input } from '@angular/core';
import { OnChanges, SimpleChanges, Output } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnChanges {

    @Input() data: any;
    theme: string;

  constructor() { }

  modal_click() {
      this.theme = this.theme + " out";
      console.log("close");
    }

    ngOnChanges(changes: SimpleChanges) {
        
        this.data = changes['data'].currentValue;
        console.log(this.data);
        if (this.data)
        {
            this.theme = this.data.theme;
        }
        
    }

    ngDoCheck() {
        
        //if (this.theme !== this.InputTheme)
        //{
        //    console.log("check");
        //    this.theme = this.InputTheme
        //}
        
    }

}
