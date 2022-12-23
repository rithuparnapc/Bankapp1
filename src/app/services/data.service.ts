import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetails:any={
    1000:{acno:1000,username:'Seba', password:1000,balance:2000},
    1001:{acno:1001,username:'Manu', password:1001,balance:2000},
    1002:{acno:1002,username:'Fiza', password:1002,balance:2000},
    1003:{acno:1003,username:'Fabi', password:1003,balance:2000},
  }

  constructor() { }
  signup(acno:any,username:any,password:any){
    var userDetails=this.userDetails;
    if(acno in this.userDetails){
      return false;
    }
    else{
      userDetails[acno]={
        acno:acno,
        username:username,
        password:password,
        balance:0
      }
      return true;
    }
    
  }
    login(acno:any,pswd:any){
    var userDetails=this.userDetails;
    if(acno in this.userDetails){
      
      if(pswd==this.userDetails[acno]['password']){
        return true;

      }
      else{
      alert('invailed password')
      return false;
      }
      
    }
    else{
      alert('invalid userdetails')
      return false;

    }
    
  }
  deposit(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    let userDetails=this.userDetails;
    if(acno in this.userDetails){
      if(pswd==this.userDetails[acno]['password']){
        userDetails[acno]['balance'] +=amount;
        return userDetails[acno]['balance']

      }
      else{
        alert('incorrect password')
        return false;
      }
    }
    else{
      alert('incorrect user details')
      return false
    }

  }
  withdraw(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    let userDetails=this.userDetails;
    if(acno in this.userDetails){
      if(pswd==this.userDetails[acno]['password']){
        if(userDetails[acno]['balance']>amount){

        
        userDetails[acno]['balance'] -=amount;
        return userDetails[acno]['balance']
        }
      }
      else{
        alert('incorrect password')
        return false;
      }
    }
    else{
      alert('incorrect user details')
      return false
    }

  }
}

