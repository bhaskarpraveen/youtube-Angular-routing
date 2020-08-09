import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { Page404Component } from './page404/page404.component';
const routes: Routes = [
  {path:'component',children:[
    {path:'c1',component:C1Component},
    {path:'c2',component:C2Component},
    {path:'c1/:num',component:C1Component},
    {path:'c2/:num',component:C2Component}
  ]},
  
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  


exports: [RouterModule]
})
export class AppRoutingModule { }
