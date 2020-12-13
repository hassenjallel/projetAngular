import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Match } from '../model/Match';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-modifiermatch',
  templateUrl: './modifiermatch.component.html',
  styleUrls: ['./modifiermatch.component.css']
})
export class ModifiermatchComponent implements OnInit {
  match : Match[] = [];
   m : Match = new Match();

  id =0;
  x="" ;
  form: FormGroup;
  
  constructor(private Us : UserService ,  private route: ActivatedRoute,
    private router: Router) { 
     
    }
    verify(id) {
      var result =-1;
     this.match.forEach( function(value, key) {
       
          if(id == value.id )
            return value;
      });
      return result;
  }
  ngOnInit(): void {
    /**get id from url */
    
    this.route.params.forEach(valueurl =>{
     this.id = valueurl.id;
     this.m.name= valueurl.name;
     this.m.phonenumb=valueurl.phonenumb;
     console.log(this.m.phonenumb);
     this.m.playernumb=valueurl.playernumb;
     this.m.localisation=valueurl.localisation;
    this.m.iduser=valueurl.iduser

    });
    
   

  }
  modifier(){
    this.Us.updateMatch(this.id,this.m).subscribe(res =>
      {console.log('match update!');
    });
   this.router.navigateByUrl('/match/'+this.m.iduser);

  }
 

}
