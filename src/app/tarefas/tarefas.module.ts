import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TarefaService } from './shared';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
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
