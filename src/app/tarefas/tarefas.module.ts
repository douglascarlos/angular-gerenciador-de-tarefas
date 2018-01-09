import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaService } from './shared';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
  	TarefaService
  ],
  declarations: [
  	ListarComponent,
  	CadastrarComponent
  ]
})
export class TarefasModule { }
