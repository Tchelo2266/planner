import { Component, OnInit } from '@angular/core';
import { Tarefas } from '../models/tarefas.model';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {
  public tarefas: Array<Tarefas> = [ ]

  constructor(private tarefasService: TarefasService) { }

  ngOnInit() {
    this.tarefas = this.tarefasService.getAll()

  }

}
