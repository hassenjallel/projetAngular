import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Match} from '../model/match';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  constructor(private Us : UserService ,  private route: ActivatedRoute,
    private router: Router) { }
  match : Match[] = [];
  name="dsq";

   id =0;
   expiree="";
  ngOnInit(): void {
    let date=new Date();
    this.route.params.forEach(value =>{
     this.id = value.id;
    });
    console.log(this.id);
  this.Us.getMatchJson().subscribe(
    (response)=>
  {
    this.match=response;
  
  }
  );
  
  
  }
  supprimer(id){
    this.Us.deleteMatch(id).subscribe();
    window.location.reload();
    console.log(this.id)
    
  }
  modifier(id,name,playernumb,phonenumb,localisation,date,iduser){
    this.router.navigateByUrl('/modifiermatch/'+id+'/'+name+'/'+playernumb+'/'+phonenumb+'/'+localisation+'/'+date+'/'+iduser);
  }
  filter(){
    console.log(this.name);
    this.Us.getMatchbyName(this.name).subscribe(
      (response)=>
    {
      this.match=response;
      
    }
    );
    console.log(this.match);
  }

}
