import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
declare const google: any;
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
     map: any;
    initMap() {
        var styles = {
        default: null,
            
        //neon black-grey starts
        night: [
                    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#FFFFFF"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#303030"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#FFFFFF"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#808080"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#FFFFFF"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#303030"
            }
        ]
    }// neon black-grey ends
],
        
    theme4: [
    //blue and black starts
{    "stylers": [
            /*{
                "hue": "#ffffff"
            },*/
            {
                "invert_lightness": true
            },
            {
                "saturation": -100
            },
            {
                "lightness": 25
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
                /*"color": "#2D333C"*/
            }
        ]
    }],//blue and black ends
       
        theme2:[
            //extreme dark starts
            {
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "stylers": [
            {
                "color": "#131314"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#131313"
            },
            {
                "lightness": 7
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 25
            }
        ]
    }//extreme dark ends*/
        ]    
};

        // Create the map with no initial style specified.
        // It therefore has default styling.
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.6512141, lng: -73.9115755},
          zoom: 12,
          mapTypeControl: false
        });

        // Add a style-selector control to the map.
        var styleControl = document.getElementById('style-selector-control');
       // styleControl.style.display = "hidden";
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

        // Set the map's style to the initial value of the selector.
        //var styleSelector = document.getElementById('style-selector');
        this.map.setOptions({styles: styles["theme4"]});
        document.getElementById('map').style.height="93%";        
      }

    
      

  ngOnInit() {
      this.initMap();
  }

}
