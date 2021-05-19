import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }
  
  async show(message) {
    await Toast.show({
      text: message
    });
  }

}
