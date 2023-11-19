import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { QuestionsComponent } from './shared/questions/questions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'html', component: HtmlComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'questions', component: QuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
