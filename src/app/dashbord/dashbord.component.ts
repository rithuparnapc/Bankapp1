import { Component } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  constructor (private ds:DataService){}
  acno:any;
  pswd:any;
  amount:any;
  //result:any
  deposit(){
    alert('amount deposited')
    var acno=this.acno;
    var pswd=this.pswd;
    var amount=this.amount;
    const result=this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(`${amount} is credicted to ${acno} and balance is ${result}`)
    }else{
      alert('incorrect details');
    }
  }
  withdraw(){
    var acno=this.acno;
    var pswd=this.pswd;
    var amount=this.amount;
    const result=this.ds.withdraw(acno,pswd,amount)
    if(result){
      alert(`${amount} is withdrawed from ${acno} and balance is ${result}`)
    }else{
      alert('incorrect details');
    }
    
    alert('amount withdrawed')
  }

}
