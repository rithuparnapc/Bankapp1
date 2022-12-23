import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  acno:any;
  pswd:any;
  uname:any;
  userDetails:any={
    1000:{acno:1000,username:'Seba', password:1000,balance:2000},
    1001:{acno:1001,username:'Manu', password:1001,balance:2000},
    1002:{acno:1002,username:'Fiza', password:1002,balance:2000},
    1003:{acno:1003,username:'Fabi', password:1003,balance:2000},
  }
  constructor(private ds:DataService,private router:Router){}

  ngOnInit(): void {

  }
  signup(){
    var acno=this.acno;
    var pswd=this.pswd;
    var uname=this.uname;
    var userDetails=this.userDetails;
    const result= this.ds.signup(acno,uname,pswd)
    if(result){
      alert("Register successful:)")
      this.router.navigateByUrl('');
    }else{
      alert("Register failure")
    }
  }

}
 


