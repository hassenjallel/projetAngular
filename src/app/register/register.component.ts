import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
/*import { Routes } from '../app-routing.module';*/

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  User: User = new User();
  addUser(){
    console.log(this.User);
    this.Us.addUser(this.User).subscribe(res =>
      {console.log('Product created!');
    });
    alert("welcom "+this.User.username);
    window.location.reload();

  }
  constructor( private Us : UserService , private router: Router) { }
  registerForm = new FormGroup({
    email: new FormControl('email form invalid', Validators.email)
  })
  ngOnInit(): void {
  }
  get email() {
    return this.registerForm.get('email')
  }
  
}
