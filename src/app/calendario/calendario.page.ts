import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  public data: string;
  public saudacao: string;

  constructor(public alertController: AlertController) { }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'mensagemAlerta',
      header: 'Atenção!',
      message: 'Se cancelar sua tarefa não vai ser salva. Você tem certeza disso?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }
}
