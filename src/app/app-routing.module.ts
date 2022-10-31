import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberFormComponent} from './member-form/member-form.component';
import {MembersComponent} from './members/members.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ToolsComponent} from "./tools/tools.component";
import {ArticlesComponent} from "./articles/articles.component";
import {EventsComponent} from "./events/events.component";
import {ArticleFormComponent} from "./article-form/article-form.component";
import {AffectComponent} from "./affect/affect.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'members'
  },
  {
    path: 'members',
    pathMatch: 'full',
    component: MembersComponent
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: MemberFormComponent
  },
  {
    path: 'members/:id/edit',
    pathMatch: 'full',
    component: MemberFormComponent
  },
  {
    path: 'articles/:id/affect',
    pathMatch: 'full',
    component: AffectComponent
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'tools',
    pathMatch: 'full',
    component: ToolsComponent
  },
  {
    path: 'articles',
    pathMatch: 'full',
    component: ArticlesComponent
  },
  {
    path: 'create/articles',
    pathMatch: 'full',
    component: ArticleFormComponent
  },
  {
    path: 'events',
    pathMatch: 'full',
    component: EventsComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'members'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
