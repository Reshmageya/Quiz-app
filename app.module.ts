import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule,FormGroup } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { routes } from './routeConstant';
import { LoginGuard } from './login.guard';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizService } from './service/quiz.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    QuizComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),FormsModule,ReactiveFormsModule,RouterModule.forRoot(routes),HttpModule
  ],
  providers: [AuthenticationService,LoginGuard,QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
