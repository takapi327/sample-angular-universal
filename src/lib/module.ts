import { NgModule }       from '@angular/core'
import { CommonModule }   from '@angular/common'
import { MaterialModule } from './material'
import { StateModule }    from './state'

const MODULES = [
  CommonModule,
  MaterialModule,
  StateModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class LibModule {}
