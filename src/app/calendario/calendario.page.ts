import { getLocaleDateFormat, getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  public data: string;
  public saudacao: string;

  constructor() { }

  ngOnInit() {
    
    this.data = moment(new Date).format();
    let hora_atual = moment().format('LT');
    if(hora_atual <= '12:00' && hora_atual > '00:00'){
      this.saudacao = 'Bom dia!';
    }else if(hora_atual > '12:00' && hora_atual < '18:00'){
      this.saudacao = 'Boa tarde!';
    }else{
      this.saudacao = 'Boa noite!';
    }
    
  }

}
