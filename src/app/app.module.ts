import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MatchComponent } from './match/match.component';
import { AjoutermatchComponent } from './ajoutermatch/ajoutermatch.component';
import { ModifiermatchComponent } from './modifiermatch/modifiermatch.component';  
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
   
    MatchComponent,
    AjoutermatchComponent,
    ModifiermatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
