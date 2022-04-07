import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-footer',
  templateUrl: './homepage-footer.component.html',
  styleUrls: ['./homepage-footer.component.css']
})
export class HomepageFooterComponent implements OnInit {

  year: number = new Date().getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}
