import { Component, OnInit, Directive } from '@angular/core';
import { FormGroup, FormControl, Validators, NG_VALIDATORS } from '@angular/forms';
import { HttpService } from 'src/app/_service/http-service';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(
    private http: HttpService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, emailDomainValidator]),
      password: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required, emailDomainValidator])
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.registerForm);
    this.http.post('register', {
      email: 'eve.holt@reqres.in', password: 'pistol'
    }).subscribe((res) => {
      if (res) {
        this.router.navigate(['/login']);
      }
    }, (error) => {
      console.log('Error in register');
    });
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

}
