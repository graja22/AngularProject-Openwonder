import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  data=[
    {
title:"A",  
text:"Let there be rock!",
img:"assets/img/01.jpg"

// style:"row align-items-center"
    },
    {
title:"B",  
text:"We salute you",
img:"assets/img/02.jpg"
// style:"row align-items-center-reverse"
    },
    {
      title:"C",
text:"Lethtdbuif!",
img:"assets/img/03.jpg"
// style:"row align-items-center"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
