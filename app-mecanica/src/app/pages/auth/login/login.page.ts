import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = {
    email: '',
    password: '',
    isClient: true
  }
  constructor(private routerCtrl: Router) { }

  ngOnInit() {
  }

  onSubmmit(){
    this.login.isClient ? this.routerCtrl.navigateByUrl('tabs-client') : this.routerCtrl.navigateByUrl('tabs-prestador');
  }
  
  onRegister(){
    this.routerCtrl.navigateByUrl('register');
  }

}
