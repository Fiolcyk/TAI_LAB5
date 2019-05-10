import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { LoginComponent } from './components/login/login.component';
import { DataService } from './services/data.service';
import { AuthenticationService } from './services/authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpIntercepterBasicAuthService } from './services/interceptor-auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'contact', component: KontaktComponent},
  { path: 'blog', component: BlogHomeComponent},
  { path: 'blog/detail/:id', component: BlogItemDetailsComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    DataService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntercepterBasicAuthService,
      multi: true
    },
    ],
  
})
export class AppRoutingModule { }
