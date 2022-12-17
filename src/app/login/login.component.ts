import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {  //3rd excecution
  //class is a  collection of properties and methods
  ngOnInit(): void{

  }

  aim="Your perfect banking partner :)"
  account="please enter your account number"
  //acno:any
  acno="";//to hold  the value ffrom the user
  pswd="";




userDetails:any={
  1000:{acno:1000,username:'seba', password:1000,balance:2000},
  1001:{acno:1001,username:'manu', password:1001,balance:2000},
  1002:{acno:1002,username:'iza', password:1002,balance:2000},
  1003:{acno:1003,username:'fabi', password:1003,balance:2000},
}
login(){
  //alert('login clicked')
  var acno=this.acno;
  var pswd=this.pswd;
  var userDetails=this.userDetails;

  if(acno in userDetails){
    if(pswd==userDetails[acno]['password']){
      alert("Login successfull :)")
    }
    else{
      alert("incorrect password :(")
    }
  }
  else{
    alert("user not found :(")
  }

}
acnoChange(event:any){
  //console.log(event.target.value);
  this.acno= event.target.value;
  console.log(this.acno);
  
  
}
pswdChange(event:any){
 // console.log(event.target.value);
 this.pswd=event.target.value;
 console.log(this.pswd);
 
  
}
}
//properties
//user defined function//4th excecuted
