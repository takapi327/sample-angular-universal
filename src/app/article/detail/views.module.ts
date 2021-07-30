import { NgModule }  from '@angular/core'
import { LibModule } from 'src/lib'
import * as views from './views'

const MODULES = [
  LibModule
]

const COMPONENTS = [
  views.PageMainComponent
]

@NgModule({
  imports:      MODULES,
  exports:      COMPONENTS,
  declarations: COMPONENTS
})
export class ArticleDetailViewsModule {}
