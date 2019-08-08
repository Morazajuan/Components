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


  // ID Card data Members
  public name;
  public ID;
  public dependents;
  public groupNo;
  public bin;
  public benPla;
  public effDate;
  public plan;
  public ov;
  public sc;
  public emergency;
  public dedu;


  updateCard(){
    this.name = this.members[this.index].name
    this.ID = this.members[this.index].id
    this.dependents = this.members[this.index].dependents
    this.groupNo = this.members[this.index].groupNo
    this.bin = this.members[this.index].bin
    this.benPla = this.members[this.index].benPla
    this.effDate = this.members[this.index].effDate
    this.plan = this.members[this.index].plan
    this.ov = this.members[this.index].ov
    this.sc = this.members[this.index].sc
    this.emergency = this.members[this.index].emergency
    this.dedu = this.members[this.index].dedu


  }

  constructor(private _memberService: MemberService){}

  ngOnInit() {
 this._memberService.getMembers()
    .subscribe(data =>
      {//This code is after http response has received the data aka json file


        this.members = data;        
        this.count = Object.keys(this.members).length;

        console.log("Members JSON size: "+this.count);
        this.updateCard()
      });
      


     

}

// Previous and Next button
//will add or subtract depending on button cliked
prevBtn(){
if(this.index>0)
  this.index-=1;

  this.updateCard()

  console.log(this.index);
}

nextBtn(){
if(this.index < this.count-1)
  this.index+=1;
  this.updateCard()

  // this.fade()
 
  console.log(this.index);
  
}



private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}
 

fade(){


  (async () => { 
    // Do something before delay
    
   await this.delay(3000);

    // Do something after
   

  })();

}
 





}










