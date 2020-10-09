import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { ProfileStorageTestService } from 'src/app/service/profile-storage-test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private profileStorage: ProfileStorageTestService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      loginName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value.loginName, this.loginForm.value.password).then(res => {
      console.log(res);
      this.profileStorage.token.next(res.response.responseToken);
      this.router.navigate(['folder/user/profile']);
    }).catch(err => {
      console.log(err);
      alert(err && err.message);
    });
  }

}
