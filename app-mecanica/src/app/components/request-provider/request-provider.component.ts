import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-request-provider',
  templateUrl: './request-provider.component.html',
  styleUrls: ['./request-provider.component.scss'],
})
export class RequestProviderComponent implements OnInit {
  @Input('provider') provider;

  request = {
    cliente: '',
    tipoMaquina: '',
    matricula:'',
    marca: '',
    modelo:'',
    local:'',
    avaria:''
  }

  constructor(private modalCtrl: ModalController,private navParams: NavParams) { 
    this.provider = this.navParams.get('provider');
    console.log(this.provider);
    
  }

  ngOnInit() {}

  dismiss(){
    this.modalCtrl.dismiss();
  }

  enviarPedido(){
    this.dismiss();
  }

}
