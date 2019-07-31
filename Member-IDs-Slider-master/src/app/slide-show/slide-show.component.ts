import { Component, OnInit, NgModule } from '@angular/core';
import { MemberService } from '../member.service';




@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css'],
  providers: [MemberService]
})



export class SlideShowComponent implements OnInit {
 
  public members = [];
  public MemberTest = ["juan"];

  public count  = 0;
  public index  = 0;


  constructor(private _memberService: MemberService){}

  ngOnInit() {
 this._memberService.getMembers()
    .subscribe(data =>
      {//This code is after http response has received the data aka json file


        this.members = data;        
        this.count = Object.keys(this.members).length;

        console.log("Members JSON size: "+this.count);

      });
      


     

}

// Previous and Next button
//will add or subtract depending on button cliked
prevBtn(){
if(this.index>0)
  this.index-=1;


  console.log(this.index);
}

nextBtn(){
if(this.index < this.count)
  this.index+=1;
  console.log(this.index);
}


}

