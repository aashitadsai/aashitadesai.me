import { Component, OnInit } from '@angular/core';
declare var Segmenter:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.seg_animation();
  }

    seg_animation(){
        var segmenter = new Segmenter(document.querySelector('.segmenter'), 
                  {
					pieces: 5,
					animation: {
						duration: 4500,
						easing: 'easeOutQuad',
						delay: 10,
						translateZ: {min: 10, max: 65}
					},
					parallax: true,
					parallaxMovement: {min: 7, max: 10},
					positions: [
                        /*{top:80, left: 50, width:30, height:10},
                        {top:65, left: 50, width:30, height:10},
                        {top:50, left: 50, width:30, height:10},
                        {top:35, left: 50, width:30, height:10},
                        {top:20, left: 50, width:30, height:10},
                        {top:5, left: 50, width:30, height:10}
						*/
                        {top: 30, left: 20, width: 20, height: 30},
						{top: 28, left: 35, width: 30, height: 20},
						{top: 45, left: 18, width: 14, height: 25},
						{top: 43, left: 50, width: 20, height: 10},
						{top: 50, left: 65, width: 10, height: 30},
						{top: 68, left: 20, width: 10, height: 13},
						{top: 70, left: 67, width: 10, height: 20}
					],
					onReady: function() {
						
							segmenter.animate();
						
                                    }
				});
    }
    
}
