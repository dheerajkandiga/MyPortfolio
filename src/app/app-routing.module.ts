import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { InfoComponent, MessageComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path:'project',component: ProjectsComponent},
	{path:'resume',component: ResumeComponent},
	{path:'contactDetails',component: ContactDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
