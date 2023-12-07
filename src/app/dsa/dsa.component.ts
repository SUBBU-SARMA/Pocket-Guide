import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { techTopics } from '../core/models/home';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-dsa',
  templateUrl: './dsa.component.html',
  styleUrls: ['./dsa.component.scss']
})
export class DsaComponent {
  constructor(private sharedService: SharedService, private router: Router) { }
  techTopics: techTopics[] = [
    {
      id: 1,
      sectionName: 'MATH'
    },
    {
      id: 2,
      sectionName: 'Number Theory'
    }
  ];
  ngOnInit() {
    this.sharedService.items = [{ label: 'DSA', routerLink: '/dsa' }];
  }
  goTo(sectionName: any) {
    this.sharedService.items = [{ label: 'DSA', routerLink: '/dsa' }, { label: sectionName }];
    this.router.navigate(['questions'], { queryParams: { subject: 'dsa', section: sectionName } });
  }
}
