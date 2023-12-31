import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { techTopics } from '../core/models/home';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit {
  constructor(private sharedService: SharedService, private router: Router) { }
  techTopics: techTopics[] = [
    {
      id: 1,
      sectionName: 'HTML Basic Elements'
    },
    {
      id: 2,
      sectionName: 'Routing'
    }
  ];
  ngOnInit() {
    this.sharedService.items = [{ label: 'HTML', routerLink: '/html' }];
  }
  goTo(section: any) {
    this.sharedService.items = [{ label: 'HTML', routerLink: '/html' }, { label: section }];
    this.router.navigate(['questions']);
  }
}
