import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'kontakt', component: KontaktComponent},
  { path: 'blog', component: BlogHomeComponent},
  { path: 'blog/detail/:id', component: BlogItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
