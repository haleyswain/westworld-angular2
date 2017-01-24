import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeloresComponent } from './delores/delores.component';
import { MaeveComponent } from './maeve/maeve.component';
import { FordComponent } from './ford/ford.component';
import { BernardComponent } from './bernard/bernard.component';
import { Post } from './post.model';

const appRoutes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'delores',
  component: DeloresComponent
},
{
  path: 'maeve',
  component: MaeveComponent
},
{
  path: 'ford',
  component: FordComponent
},
{
  path: 'bernard',
  component: BernardComponent
}
];








export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
