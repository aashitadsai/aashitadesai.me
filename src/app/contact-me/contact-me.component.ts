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
    marker:any;
    
    initMap() {
        var styles = {
        default: null,
            
    theme2: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "weight": 0.5
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            }
        ]
    }
],						
    theme3:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "elementType": "labels.icon",
    "stylers": [
      {
        "lightness": -75
      },
      {
        "visibility": "on"
      },
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
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
    }]//blue and black ends
       
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
        
        //map marker
        /*this.beachMarker = new this.svgMarker({
          position: {lat: 40.737415, lng: -74.0510147},
          map: this.map,
          url: '../../assets/images/map_marker_1.svg'
        });*/
        
    this.marker = new google.maps.Marker({
	position: {lat: 40.709360, lng: -74.08313},
	map: this.map,
	title: 'I LIVE HERE!',
    optimized: false,
	icon: {
		url: "../../assets/images/marker.gif",
		scaledSize: new google.maps.Size(60,60),
        draggable: false
	}
});
        
        this.marker.setMap(this.map);
      }

    
  ngOnInit() {
      this.initMap();
  }

}
