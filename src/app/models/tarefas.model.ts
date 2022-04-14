export class Tarefas {
  public id: number;
  public nome: string;
  public descricao: string;
  public data: string;

  constructor(id?: number, nome?: string, descricao?: string, data?: string){
    this.id = id? id : 0;
    this.nome = nome? nome : "";
    this.descricao = descricao? descricao : "";
    this.data = data? data : "";

  }
}