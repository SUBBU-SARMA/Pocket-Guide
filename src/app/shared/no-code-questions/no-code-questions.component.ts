import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { queAndAnsItem } from 'src/app/core/models/home';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-no-code-questions',
  templateUrl: './no-code-questions.component.html',
  styleUrls: ['./no-code-questions.component.scss']
})
export class NoCodeQuestionsComponent {
  subject!: string | null;
  section!: string | null;
  url!: string;
 // @ViewChild('math1') math1: TemplateRef<any>;
  // templates = new Map<string, TemplateRef<any>>();
  constructor(private route: ActivatedRoute, private httpService: HttpService) { }
  quesAndAns: queAndAnsItem[] = [];
  // {
  //   id: "sample1",
  //   question: 'Sample htttp question',
  //   answer: 'sample Answer',
  //   codeSnippet: true
  // },
  // {
  //   id: "sample2",
  //   question: 'Sample htttp question2',
  //   answer: 'sample Answer2',
  //   codeSnippet: true
  // }];

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.subject = params.get('subject');
      this.section = params.get('section');
    });
    this.getSubjectData();  
    // for (let item of this.quesAndAns) {
    //   this.templates.set('template' + item.id, this.templateRef);
    // }
  }
  isArray(value: any): value is Array<any> {
    return value instanceof Array;
  }
  getSubjectData() {
    switch (this.subject) {
      case 'dsa':
        this.url = '../../../assets/mock-json/DSA.json';
    }
    this.httpService.requestGetData(this.url).subscribe((response) => {
      response.forEach((element: any) => {
        if (element.section == this.section) {
          this.quesAndAns = element.quesAndAns
        }
      });
    });
  }
}
