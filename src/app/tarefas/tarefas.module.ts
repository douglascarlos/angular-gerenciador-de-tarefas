import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaService } from './shared';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
  	TarefaService
  ],
  declarations: [
  	ListarComponent
  ]
})
export class TarefasModule { }
