import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { FormtwoComponent } from './formtwo/formtwo.component';



import { LandingComponent } from './landing/landing.component';

const routes: Routes = [




  {path : 'formtwo', component : FormtwoComponent},

  {path : 'landing', component : LandingComponent},



];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class AdminRoutingModule { }

