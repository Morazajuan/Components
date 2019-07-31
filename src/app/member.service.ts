import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMember } from '../app/slide-show/member';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class MemberService {

  private _url: string = "/assets/data/members.json";
  constructor(private http: HttpClient) { }

getMembers(): Observable<IMember[]>{

  return this.http.get<IMember[]>(this._url);

}
}
