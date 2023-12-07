import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { techTopics } from '../core/models/home';
import { SharedService } from '../shared/services/shared.service';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  constructor(private router: Router, private sharedService: SharedService) { }
  techTopics: techTopics[] = [
    {
      id: 1,
      sectionName: 'HTTP'
    },
    {
      id: 2,
      sectionName: 'Routing'
    }
  ];

  ngOnInit() {
    this.sharedService.items = [{ label: 'Angular', routerLink: '/angular' }];
  }

  goTo(section: any) {
    this.sharedService.items = [{ label: 'Angular', routerLink: '/angular' }, { label: section }];
    this.router.navigate(['questions']);
  }
}
