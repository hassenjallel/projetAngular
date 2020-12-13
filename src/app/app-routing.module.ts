import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { ModifiermatchComponent } from './modifiermatch/modifiermatch.component';



const routes: Routes = [
  
  {path:"",component:HomeComponent},
  {path:"match/:id",component:MatchComponent},
  {path:"modifiermatch/:id/:name/:playernumb/:phonenumb/:localisation/:date/:iduser",component:ModifiermatchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
