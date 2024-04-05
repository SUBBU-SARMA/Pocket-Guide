import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnChanges {
  @Input() answers: any;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
