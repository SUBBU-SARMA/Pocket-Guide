import { Component, Input } from '@angular/core';
import { queAndAnsItem } from 'src/app/core/models/home';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  queAndAns: queAndAnsItem[] = [{
    id: 1,
    question: 'Sample htttp question',
    answer: 'sample Answer'
  },
  {
    id: 2,
    question: 'Sample htttp question2',
    answer: 'sample Answer2'
  }];
}
