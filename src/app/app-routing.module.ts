import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { SkillsComponent } from './page/skills/skills.component';


const routes: Routes = [
  {
    path: '', 
    component: AboutComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
