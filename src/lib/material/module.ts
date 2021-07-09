import { NgModule }     from '@angular/core'
import { CommonModule } from '@angular/common'

import { SectionStepNavModule } from './section-step-nav'

const MODULES = [
  CommonModule,
  SectionStepNavModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule {}
