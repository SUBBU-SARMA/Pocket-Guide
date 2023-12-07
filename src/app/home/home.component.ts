import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home, technologyItem } from '../core/models/home';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private sharedService: SharedService) { }
  technologies: technologyItem[] = [
    {
      id: 1,
      technologyName: 'Angular',
      routePath: 'angular'
    },
    {
      id: 2,
      technologyName: 'JavaScript',
      routePath: ''
    },
    {
      id: 3,
      technologyName: 'HTML/HTML5',
      routePath: 'html'
    },
    {
      id: 4,
      technologyName: 'CSS/CSS3',
      routePath: ''
    },
    {
      id: 5,
      technologyName: 'DSA',
      routePath: 'dsa'
    }
  ];
  ngOnInit() {
    this.sharedService.items = [];
  }
  goTo(routePath: string) {
    this.router.navigate([routePath]);
  }
}
