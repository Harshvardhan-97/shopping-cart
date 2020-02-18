import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UloginService } from 'src/app/service/ulogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {
myForm:FormGroup;
UserData;
resData;
errMsg;

  constructor( private fb:FormBuilder, private ls:UloginService , private router:Router) { }

  ngOnInit() {
    this.validate()
  }
validate()
{
  this.myForm=this.fb.group(
    {
      'email':['',Validators.required],
      'password':['',Validators.required]
    }
  )}

login()
{

  const UserData=this.myForm.getRawValue();
  console.log(UserData);
  this.UserData=this.ls.login(UserData)
  .subscribe(res=>
    {
      this.resData=res;
      if(this.resData.err==0)
      {
        localStorage.setItem('userid',this.resData.ulogin);
        setTimeout(()=>
        {
          this.router.navigate(['/admin'])
        },2000)

      }
      else{
        this.errMsg=this.resData.msg;
      }
    },err=>{})
  }
  ngOnDestroy(){
    if(this.UserData)
    {
      this.UserData.unsubscribe();
    }
  }

}
