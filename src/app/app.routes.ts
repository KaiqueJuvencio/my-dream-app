import { ProjectsComponent } from './projects/projects.component'
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'projects', component: ProjectsComponent}
]