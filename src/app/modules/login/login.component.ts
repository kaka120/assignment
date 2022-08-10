import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { authService } from '../../data/service/authService.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

   constructor(private _service:authService,private router:Router){
   }

   ngOnInit() {
   
}

  onSubmit(form:any){
    let appned = `user_id=${this.user.email}&password=${this.user.password}` ;
    this._service.getMethod(`https://retoolapi.dev/B13laa/getusers?${appned}` )
    .subscribe(
      res=> {
        console.log(Object.keys(res[0]).length)
        //this.router.navigate(['./bodyModule'])
         if(Object.keys(res[0]).length>1){
           this.router.navigate(['./bodyModule'])  
       }
      },
      err=> console.log(err)
    )
  }
}
