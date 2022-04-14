import { Injectable } from '@angular/core';
import { Tarefas } from '../models/tarefas.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  // public moment = require('moment');

  public tarefas: Array<Tarefas> = [
    {
      id: 0,
      nome: "Comida para o cachorro",
      descricao: "Colocar ração e conferir se não tem que comprar mais",
      data: moment(new Date).format("DD/MM/YYYY")
    },
    {
      id: 1,
      nome: "Passear com o cachorro",
      descricao: "Levar o cachorro pra fazer necessidades",
      data: moment(new Date).format("DD/MM/YYYY")
    },
    {
      id: 2,
      nome: "Arrumar o quarto",
      descricao: "Tentar encotrar coisas perdidas na bagunça do quarto",
      data: moment(new Date).format("DD/MM/YYYY")
    },
    {
      id: 3,
      nome: "Lavar roupa",
      descricao: "Colocar as roupas pra lavar e ir fazer o trabalho",
      data: moment(new Date).format("DD/MM/YYYY")
    },
    {
      id: 4,
      nome: "Trabalho da faculdade",
      descricao: "Fazer o trabalho de mobile de ultima hora",
      data: moment(new Date).format("DD/MM/YYYY")
    }
  ]

  constructor() { }

  public getAll(): Array<Tarefas> {
    return this.tarefas;
  }

}
