import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(protected sharedService: SharedService) { }
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    //this.items = this.sharedService.items;

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
