import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  submitForm;
  submitData;
  resData;
  errMsg;
  constructor(private ls:LoginService, private router:Router, private fb:FormBuilder) { }

  ngOnInit() {
    this.Validate()
  }
  Validate()
  {
     this.myForm=this.fb.group(
       {
         'email':['',Validators.required],
         'password':['',Validators.required]
       }
     )
  }

  loginSubmit() 
  {
    const formData=this.myForm.getRawValue();
    console.log(formData);
    this.submitData=this.ls.login(formData)
    .subscribe(res=>
    {
     this.resData=res;
     if(this.resData.err==0)
     {
       localStorage.setItem('uid',this.resData.ulogin);
       setTimeout(()=>
         {
           this.router.navigate(['/admin'])
         },2000)
       
     }
     else
     {
       this.errMsg=this.resData.msg;
     }
    },err=>{}) 
  }
  ngOnDestroy()
  {
    if(this.submitData)
    {
      this.submitData.unsubscribe();
    }
  }

}
