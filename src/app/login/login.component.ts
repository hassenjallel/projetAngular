import { Component, Input, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { User }from '../model/User';
import { HttpClient } from "@angular/common/http";
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   @Input() filsProperty;
   
   User : User=new User();
   emps: User[] = []; 
     

   data:Array<any>=[]
   arr:Array<any>=[]

   id=0;
   username="";
   password="";
  constructor( private Us : UserService , private router: Router) { }

  ngOnInit(): void {
    console.log(this.filsProperty);
    this.Us.getUserJson().subscribe(
      (response)=>
    {
      this.emps=response;
    }
    );
  }
  
verify(username,password) {
    var result =-1;
   this.emps.forEach( function(value, key) {
     console.log(value.username)
        if(username == value.username && password==value.password)
            result = value.id;
    });
    return result;
}
login(){
 this.username=this.User.username;
 this.password=this.User.password;
 var id=this.verify(this.username,this.password);
  if(id!=-1){

  alert("welcom "+this.username);
  this.router.navigateByUrl('/match/'+id);
  }else {
   
    alert("check your inputs");
  }
  
}
}
