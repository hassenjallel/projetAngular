import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User }from '../model/User';
import { Match }from '../model/Match';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
urlUser: string=" http://localhost:3000/users";
urlMatch: string=" http://localhost:3000/match";

  constructor( private http : HttpClient) { }
  getUserJson(){
    return this.http.get<User[]>(this.urlUser);
  }
  getMatchJson(){
    return this.http.get<Match[]>(this.urlMatch);
  }
  addUser(user:User):Observable<User>
  {
    return this.http.post<User>(this.urlUser,user,this.httpOptions);
  }
  addMatch(match:Match):Observable<Match>
  {
    return this.http.post<Match>(this.urlMatch,match,this.httpOptions);
  }
  updateMatch(id : number ,match:Match):Observable<Match>
  {
    return this.http.put<Match>(this.urlMatch+'/'+id,match,this.httpOptions);
  }
  getMatchbyName(name : string){
    return this.http.get<Match[]>(this.urlMatch+'?name_like='+name);
  }
  deleteMatch( m : Match | number) :  Observable<Match>{
    const id = typeof m === 'number' ? m : m.id;
    const url = this.urlMatch+'/'+id;
    return this.http.delete<Match>(url);
  }
}
