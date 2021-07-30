import { NgModule }     from '@angular/core'
import { CommonModule } from '@angular/common'
import * as views from './views'

const MODULES = [
  CommonModule
]

const COMPONENTS = [
  views.PageMainComponent
]

@NgModule({
  imports:      MODULES,
  exports:      COMPONENTS,
  declarations: COMPONENTS
})
export class ViewsModule {}
