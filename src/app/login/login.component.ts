import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'softX';
  loginForm: any;
  error: string | null = null;

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com'
  users: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router){}
  

  ngOnInit(){
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
      ]],
      password: ['', [
        Validators.required,
      ]]
    });
    
  }
  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }
  public getUsers() {
    if (this.username.value === "admin" && this.password.value === "admin"){
      this.router.navigate(['./home']);
    }else {
        this.error = 'Username or password is incorrect';
    }
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
