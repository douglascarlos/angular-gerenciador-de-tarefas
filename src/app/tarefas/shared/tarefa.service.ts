import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable()
export class TarefaService {

  constructor() { }

  public buscar(): Tarefa[] {
  	return this.buscarDados();
  }

  public cadastrar(tarefa: Tarefa): void {
    tarefa.setId((new Date()).getTime());
    tarefa.setConcluida(false);
    let tarefas = this.buscar();
    tarefas.push(tarefa);
    this.atualizarDados(tarefas);
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
