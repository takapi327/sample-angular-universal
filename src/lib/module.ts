import { NgModule }       from '@angular/core'
import { MaterialModule } from './material'
import { StateModule }    from './state'

const MODULES = [
  MaterialModule,
  StateModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class LibModule {}
