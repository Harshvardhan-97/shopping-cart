import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { DashComponent } from './dash/dash.component';
import { HeaderComponent } from './index/header/header.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './index/footer/footer.component';
import { HomeComponent } from './index/home/home.component';
import { RegisterComponent } from './index/register/register.component';
import { UloginComponent } from './index/ulogin/ulogin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UloginService } from './service/ulogin.service';
import { DefaultComponent } from './dash/default/default.component';
import { AheaderComponent } from './dash/aheader/aheader.component';
import { AfooterComponent } from './dash/afooter/afooter.component';
import { SidebarComponent } from './dash/sidebar/sidebar.component';
import { AddcatComponent } from './dash/addcat/addcat.component';
import { CatComponent } from './dash/cat/cat.component';
import { AddprodComponent } from './dash/addprod/addprod.component';
import { ProdComponent } from './dash/prod/prod.component';
import { OrderComponent } from './dash/order/order.component';
import { FeedbackComponent } from './dash/feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationComponent } from './dash/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    UloginComponent,
    NotFoundComponent,
    DefaultComponent,
    AheaderComponent,
    AfooterComponent,
    SidebarComponent,
    AddcatComponent,
    CatComponent,
    AddprodComponent,
    ProdComponent,
    OrderComponent,
    FeedbackComponent,
    ContactComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, UloginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
