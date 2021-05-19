import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth/auth.service';
import { LoadingService } from '../api/loading/loading.service';
import { ToastService } from '../api/toast/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(
    public _loading: LoadingService,
    private _auth: AuthService,
    private _router: Router,
    public _toast: ToastService
  ) { }

  ngOnInit() {
  }

  hideShowPassword() {
    console.log(this.passwordType)
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
}

register(data){
  this._loading.presentLoading();
  console.log(data)
  let response;
  // console.log(data);
  this._auth.register(data).then( data => {
    data.subscribe(
      result => {
        this._loading.dismissLoading();
        console.log(result);
        response = result;
        if(response.status){
          this._toast.show('Employee Added');
          this._router.navigateByUrl('/login');
        }
        else{
          this._toast.show(response.message);
        }
      },
      error => {console.log(error)}
    )
  })
}

}
