import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../_service/http-service';
import { Router } from '@angular/router';

function emailDomainValidator(control: FormControl) {
  let email = control.value;
  if (email) {
    if (email.includes('admin') || email.includes('manager') || email.includes('superadmin')) {
      return {
        emailDomain: {
          parsedDomain: email
        }
      };
    }
  }
  return null;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private http: HttpService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, emailDomainValidator]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.loginForm);
    this.http.post('login', { email: 'eve.holt@reqres.in', password: 'cityslicka' }).subscribe((res: any) => {
      if (res) {
        sessionStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      }
    }, (error) => {
      console.log('Error in login');
    });
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }
}
