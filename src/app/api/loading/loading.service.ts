import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = false;
  
  constructor( 
    public loadingController: LoadingController
    ) { }


  // Loading Section
  async presentLoading() {

    this.isLoading = true;
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 0,
      spinner: 'lines'
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
    
    
  }

  async dismissLoading(){
    this.isLoading = false;

    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

}
