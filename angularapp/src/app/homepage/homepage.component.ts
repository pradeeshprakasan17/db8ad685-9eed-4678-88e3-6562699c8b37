import { Component, OnInit } from '@angular/core';
import { ProductItems } from './productItems';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  productItems : ProductItems[] = [
    {id:1},{id:2},{id:3},{id:4},{id:5},{id:6}
  ];

  gridColumns = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
