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
    this.data = moment(new Date()).format();
    // eslint-disable-next-line prefer-const
    let horaAtual = moment().format('LT');
    if(horaAtual <= '12:00' && horaAtual > '00:00'){
      this.saudacao = 'Bom dia!';
    }else if(horaAtual > '12:00' && horaAtual < '18:00'){
      this.saudacao = 'Boa tarde!';
    }else{
      this.saudacao = 'Boa noite!';
    }
  }
}
