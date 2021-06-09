import { NgModule } from '@angular/core'
import * as views from './views'

const COMPONENTS = [
  views.PageMainComponent
]

@NgModule({
  exports:      COMPONENTS,
  declarations: COMPONENTS
})
export class ViewsModule {}
