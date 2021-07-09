import { NgModule }     from '@angular/core'
import { CommonModule } from '@angular/common'
import * as mat from './public'

const MODULES = [
  CommonModule
]

const COMPONENTS = [
  mat.SectionStepNavComponent
]

@NgModule({
  imports:        MODULES,
  exports:      [ COMPONENTS ],
  declarations: [ COMPONENTS ]
})
export class SectionStepNavModule {}
