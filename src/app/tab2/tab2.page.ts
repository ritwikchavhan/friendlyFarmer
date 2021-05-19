import { Component } from '@angular/core';
import { WhetherService } from '../api/whether/whether.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  whether:any;
  constructor(
    private _w: WhetherService
  ) {}

  ionViewWillEnter(){
    this.getWhether();
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.getWhether();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getWhether(){
    this._w.getWhether('Nagpur').subscribe(
      result => {
        this.whether = result;
      },
      error => {
        console.error(error)
      }
    )
  }

}
