import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.scss'],
})
export class ProviderDetailsComponent implements OnInit {

  @Input('provider') provider;
  constructor(private modalCtrl: ModalController,private navParams: NavParams) { 
    this.provider = this.navParams.get('provider');
    console.log(this.provider);
    
  }

  ngOnInit() {}

  dismiss(){
    this.modalCtrl.dismiss();
  }
}
