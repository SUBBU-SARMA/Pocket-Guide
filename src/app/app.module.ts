import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//prime ng modules
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AccordionModule } from 'primeng/accordion';

//components
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { QuestionsComponent } from './shared/questions/questions.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AngularComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    QuestionsComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    DividerModule,
    BreadcrumbModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
