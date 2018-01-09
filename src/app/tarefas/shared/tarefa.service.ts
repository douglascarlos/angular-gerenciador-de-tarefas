import { Injectable } from '@angular/core';

import { Tarefa } from '../shared';

@Injectable()
export class TarefaService {

  constructor() { }

  public buscar(): Tarefa[] {
  	return this.buscarDados();
  }

  private buscarDados(): Tarefa[] {
  	let dados = localStorage.getItem('tarefas');
  	let tarefas = [];
  	if(dados){
  		tarefas = JSON.parse(dados);
  		tarefas.forEach((tarefa, index, array) => {
  			array[index] = new Tarefa(tarefa.id, tarefa.nome, tarefa.concluida);
  		});
  	}
  	return tarefas;
  }

  private atualizarDados(tarefas: Tarefa[]): void {
  	let dados = JSON.stringify(tarefas);
  	localStorage.setItem('tarefas', dados);
  }

}
