import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './index/home/home.component';
import { RegisterComponent } from './index/register/register.component';
import { UloginComponent } from './index/ulogin/ulogin.component';
import { DefaultComponent } from './dash/default/default.component';
import { AddcatComponent } from './dash/addcat/addcat.component';
import { CatComponent } from './dash/cat/cat.component';
import { AddprodComponent } from './dash/addprod/addprod.component';
import { ProdComponent } from './dash/prod/prod.component';
import { OrderComponent } from './dash/order/order.component';
import { FeedbackComponent } from './dash/feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationComponent } from './dash/notification/notification.component';


const routes: Routes = [
  { path:'', component:IndexComponent,
  children:[
    { path:'', redirectTo:'home', pathMatch:'full'},
    { path:'home', component:HomeComponent},
    {path:'contact',component:ContactComponent},
    { path:'register', component:RegisterComponent},
    { path:'ulogin', component:UloginComponent},
  ]},
  { path:'login',component:LoginComponent},
  { path:'admin', component:DashComponent,
  children:[
    { path:'', redirectTo:'default', pathMatch:'full'},
    { path:'default', component:DefaultComponent},
    { path:'notification',component:NotificationComponent},
    { path:'addcat', component:AddcatComponent},
    { path:'cat', component:CatComponent},
    { path:'addprod', component:AddprodComponent},
    { path:'prod', component:ProdComponent},
    { path:'order', component:OrderComponent},
    { path:'feedback', component:FeedbackComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
