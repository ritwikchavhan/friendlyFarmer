import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private _location: Location,
    private platform: Platform,
    public alertController: AlertController
  ) {}

  platformBackButton(){
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      this.alertController.getTop().then(r => {
        if (r) {
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      })
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/signup') || this._location.isCurrentPathEqualTo('/login')) {
          console.log(this._location.path());
          this.showExitConfirm();
      } else {

        // Navigate to back page
        // console.log('Navigate to back page');
        this._location.back();

      }

    });
  }

  showExitConfirm() {
    this.alertController.create({
      header: 'App termination',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }
}
