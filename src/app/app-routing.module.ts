import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentcropComponent } from './currentcrop/currentcrop.component';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
 },
 {
   path: 'signup',
   component: SignupComponent
 },
 {
   path: 'main',
   component: MainpageComponent
 },
 {
   path: 'settings',
   component: SettingsComponent 
 },
 {
   path: 'currentcrop',
   component: CurrentcropComponent
 },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
