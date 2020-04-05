import { RequestProviderComponent } from './../../../components/request-provider/request-provider.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProviderDetailsComponent } from '../../../components/provider-details/provider-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  prestadores = [
    {
      nome: "Domingos Masta",
      photo: "assets/image/user.jpg",
      experiencia: "3 Anos",
      sobre: "Mecanico de profissão lorem ipsum donor mais , nao tem nada a ver",
      oficina: [
        {
        nome: "Mãozinhas",
        photo: "assets/image/oficina.jpg",
        local: "Bairro Popular",
        sobre: "Mecanico de profissão lorem ipsum donor mais , nao tem nada a ver",
      },
        {
        nome: "Mãozinhas",
        photo: "assets/image/oficina.jpg",
        local: "Bairro Popular",
        sobre: "Mecanico de profissão lorem ipsum donor mais , nao tem nada a ver",
      }
    ],
      casosResolvidos: [
        {
          caso: "Troca de pneu",
          data: "16-03-1991",
          classificacap: 4,
          cliente: {}
        },
        {
          caso: "Troca de motor",
          data: "16-03-1991",
          classificacap: 4,
          cliente: {}
        }
      ]
    },
    {
      nome: "Ivandro Sousa",
      photo: "assets/image/user.jpg",
      experiencia: "0 Anos",
      sobre: "Mecanico de profissão lorem ipsum donor mais , nao tem nada a ver",
      casosResolvidos: [
        {
          caso: "Troca de pneu",
          data: "16-03-1991",
          classificacap: 4,
          cliente: {}
        },
        {
          caso: "Troca de motor",
          data: "16-03-1991",
          classificacap: 4,
          cliente: {}
        }
      ]
    },
    {
      nome: "João Paulo",
      photo: "assets/image/user.jpg",
      experiencia: "1 Anos",
      sobre: "Mecanico de profissão lorem ipsum donor mais , nao tem nada a ver",
      oficina: [{
        photo: "assets/image/oficina.jpg",
        nome: "Mãozinhas",
        local: "Bairro Popular",
        sobre: "Mecanico de profissão lorem ipsum donor mais , nao tem nada a ver",
      }],
      casosResolvidos: [
        {
          caso: "Troca de pneu",
          data: "16-03-1991",
          classificacap: 4,
          cliente: {}
        },
        {
          caso: "Troca de motor",
          data: "16-03-1991",
          classificacap: 4,
          cliente: {}
        }
      ]
    }
  ]
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async solicitar(prestador){
    const modal = await this.modalCtrl.create({
      component: RequestProviderComponent,
      componentProps: {
        provider: prestador
      }
    });

    await modal.present();
  }

  async viewDetils(prestador){
    const modal = await this.modalCtrl.create({
      component: ProviderDetailsComponent,
      componentProps: {
        provider: prestador
      }
    });

    await modal.present();
  }

}
