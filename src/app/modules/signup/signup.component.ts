import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // declare a variable of form group.
  signupForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private _http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      mobile: [''],
      email: [''],
      password: ['']
    })
  }
  // make Method to create User.
  signup() {
    return this._http.post<any>("https://retoolapi.dev/B13laa/getusers", this.signupForm.value).subscribe(res => {
      alert("User Records Added Successful...");
      this.signupForm.reset();
      this.router.navigate(['login']);                                                                        ``
    },err => {
       alert("Error ....");
    }
    )
}
}
