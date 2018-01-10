import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar';
import { EditarComponent } from './editar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
  	TarefaService
  ],
  declarations: [
  	ListarComponent,
  	CadastrarComponent,
  	EditarComponent,
  	TarefaConcluidaDirective
  ]
})
export class TarefasModule { }
