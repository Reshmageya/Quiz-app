import {Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import{QuestionsComponent} from './questions/questions.component';

export const routes:Routes=[
    {path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    {path:'quiz',component:QuizComponent},
    {path:'questions',component:QuestionsComponent}
];