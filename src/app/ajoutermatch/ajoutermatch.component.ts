import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from '../model/Match';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ajoutermatch',
  templateUrl: './ajoutermatch.component.html',
  styleUrls: ['./ajoutermatch.component.css']
})
export class AjoutermatchComponent implements OnInit {
  match: Match = new Match();
  @Input() iduser;
  
 
  constructor(private Us : UserService , private router: Router,public datepipe: DatePipe) { }
  addmatch(){
    console.log(this.match);
    this.match.iduser=this.iduser;
    this.match.Datee=this.datepipe.transform(this.match.Datee, 'yyyy-MM-dd');
    this.Us.addMatch(this.match).subscribe(res =>
      {console.log('match created!');
    });
   this.router.navigateByUrl('/match/'+this.iduser);
  }
  ngOnInit(): void {
    console.log(this.iduser)
    console.log("hahah");
  }

}
