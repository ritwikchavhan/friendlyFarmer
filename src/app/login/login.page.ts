import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../api/alert/alert.service';
import { AuthService } from '../api/auth/auth.service';
import { LoadingService } from '../api/loading/loading.service';
import { ToastService } from '../api/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  constructor(
    public _loading: LoadingService,
    private _auth: AuthService,
    private _router: Router,
    public _toast: ToastService,
    public _alert: AlertService
  ) { }

  ngOnInit() {
  }

  hideShowPassword() {
    console.log(this.passwordType)
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
}

// login(data){
//   this._loading.presentLoading();
//   console.log(data)
//   let response;
//   // console.log(data);
//   this._auth.login(data).then( data => {
//     data.subscribe(
//       result => {
//         this._loading.dismissLoading();
//         console.log(result);
//         response = result;
//         if(response.status){
//           this._alert.successAlert();
//           this._toast.show('Login Succesfull!');
//           this._router.navigateByUrl('/tabs/tab3');
//         }
//         else{
//           this._alert.failedAlert();
//           this._toast.show(response.message);
//         }
//       },
//       error => {console.log(error)}
//     )
//   })
// }

login(data){
  this._router.navigateByUrl('/tabs/tab3');
}

}
