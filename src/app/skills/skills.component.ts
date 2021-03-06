import { Component, OnInit, OnChanges } from '@angular/core';
import { ObservableMedia} from "@angular/flex-layout";
/*import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';*/
import * as d3 from 'd3';
import {skills} from './skill';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit, OnChanges {
 
aashita_skills: skills[] = new Array<skills>();

 // i10 : car = new car();
    
svgSize: any;
    
    //skillsView:string = "skills_table"; //default view
    skillsView:string = "svg_circle"; //default view
    
    viewChangeBtnText = "Skills tabular view";
    
    constructor(
        public media: ObservableMedia,
        ) {   }

    //check skills view
    isViewable(view:string):boolean
    {
        if(this.skillsView == view)
        {
                return true;
        }
        else
        {
            return false;
        }
    }
    
    //circular to table function
    switchSkillView(){
        if(this.skillsView == "svg_circle")
        {
            this.skillsView = "skills_table";
            this.viewChangeBtnText = "Skill Circular View";
        }
        else
        {
            this.skillsView = "svg_circle";
            this.viewChangeBtnText = "Skill Tabular View";
        }
    }
    
    ngOnInit() {
        //
        if(this.isViewable('svg_circle'))
        {
              this.Init();  //call function 'init()' to display circular view
        }
        this.readTable();
              
    }
    
    ngOnChanges() {
        
    }

    //d3.js circle
    Init() {
        let dsize;
        if(window.innerHeight<window.innerWidth){
            dsize = (window.innerHeight-100);
        }
        else{
            dsize = (window.innerWidth-105);
        }
        this.svgSize = dsize+'px';
        var svg = d3.select("svg"),
        margin = 20,
        //diameter = +svg.attr("width"),
        diameter = dsize,
        
        g = svg.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

        var scale = d3.scaleLinear<string>()
        .domain([-1, 5])
        .range(["hsl(0, 3%, 0%)", "hsl(0, 5%, 70%)"]);

    var color = scale.interpolate(d3.interpolateHcl);        

    var pack = d3.pack()
        .size([diameter - margin, diameter - margin])
        .padding(2);
        
    d3.json("assets/flare.json", function(error, root:any) {
      if (error) throw error;

      root = d3.hierarchy(root)
          .sum(function(d:any) { return d.size; })
          .sort(function(a, b) { return b.value - a.value; });

      var focus = root,
          nodes = pack(root).descendants(),
          view;

      var circle = g.selectAll("circle")
        .data(nodes)
        .enter().append("circle")
          .attr("class", function(d:any) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
          .style("fill", function(d:any) { return d.children ? color(d.depth) : null; })
          .on("click", function(d:any) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

      var text = g.selectAll("text")
        .data(nodes)
        .enter().append("text")
          .attr("class", "label")
          .style('fill', 'white')
          .style('text-anchor', 'middle')
          .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
          .style("display", function(d) { return d.parent === root ? "inline" : "none"; })
          .text(function(d:any) { return d.data.name; });

      var node = g.selectAll("circle,text");

      svg
          .style("background", color(-1))
          .on("click", function() { zoom(root); });

      zoomTo([root.x, root.y, root.r * 2 + margin]);

      function zoom(d) {
        if(d['children'] == null) {
            d = d.parent;
        }

        var focus0 = focus; focus = d;

        var transition = d3.transition(transition)
            .duration(d3.event.altKey ? 7500 : 750)
            .tween("zoom", function(d) {
              var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
              return function(t) { zoomTo(i(t)); };
            });

        transition.selectAll("text")
          .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
            .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
            .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
            .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
      }

      function zoomTo(v) {
        var k = diameter / v[2]; view = v;
        node.attr("transform", function(d:any) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
        circle.attr("r", function(d:any) { return d.r * k; });
      }
    });
    
} //d3.js ends

    table:any = [
        {
            skill_type: "Operating System:",
            skill_set: ["MAC","Linux", "Windows"]
        },

        {
            skill_type: "Web based Languages:",
            skill_set: ["HTML5", "CSS3", "PHP", "JavaScript", "TypeScript"]
        },

        {
            skill_type: "Libraries/JS Framework:",
            skill_set: ["D3.js", "jQuery", "KarmaJS", "Jasmine", "Express.js", "Angular 4", "ReactJS"]
        },

        {
            skill_type: "Database/Server:",
            skill_set: ["PostgreSQL", "MySQL", "SQLite", "NoSQL", "MongoDB", "Apache", "Tomcat", "node.js"]
        },

        {
            skill_type: "Framework/Web API:",
            skill_set:  ["Wordpress", "Joomla", "Facebook APIs", "Google APIs", "Selenium Webdriver", "Docker", "REST API", "JSON"]
        },

        {
            skill_type: "Web Services:",
            skill_set: ["Amazon AWS", "Microsoft Azure", "Google Cloud Platform"]
        },

        {
            skill_type: "Productivity Tools:",
            skill_set: ["npm", "MS Office", "Libre Office", "Google Analytics", "Power BI", "SharePoint", "Slack"]
        },

        {
            skill_type: "Version Control/Clients:",
            skill_set: ["GIT", "SVN", "GitHub", "Source Tree", "Tortoise SVN", "Bit Bucket"]
        },

        {
            skill_type: "UI/UX:",
            skill_set: ["Bootstrap 3/4", "Angular Material 2", "Adobe PhotoShop", "Adobe Illustrator", "Balasmiq", "Axure"]
        }

    ];
        // core_languages: ["C", "C++", "JAVA", "Python", "C#", ".NET CORE", "R", "SQL", "LINQ"],
        // web_based_languages: ["HTML5", "CSS3", "PHP", "JavaScript", "TypeScript"],
        // lib_js_framework: ["D3.js", "jQuery", "KarmaJS", "Jasmine", "Express.js", "Angular 4", "ReactJS"],
        // database_server: ["PostgreSQL", "MySQL", "SQLite", "NoSQL", "MongoDB", "Apache", "Tomcat", "node.js"],
        // framework_web_api: ["Wordpress", "Joomla", "Facebook APIs", "Google APIs", "Selenium Webdriver", "Docker", "REST API", "JSON"],
        // web_services: ["Amazon AWS", "Microsoft Azure", "Google Cloud Platform"],
        // productivity_tools: ["npm", "MS Office", "Libre Office", "Google Analytics", "Power BI", "SharePoint", "Slack"],
        // version_control_clients: ["GIT", "SVN", "GitHub", "Source Tree", "Tortoise SVN", "Bit Bucket"],
        // ui_ux:s ["Bootstrap 3/4", "Angular Material 2", "Adobe PhotoShop", "Adobe Illustrator", "Balasmiq", "Axure"]

    readTable() {
      
      //for loop
      for (let i in this.table) {
        this.aashita_skills[i] = this.table[i];
      }
           
    }
}

