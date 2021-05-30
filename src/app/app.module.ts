import { NgModule }     from '@angular/core'
import { RouterModule } from '@angular/router'

import { APP_ROUTES } from './app.routes'

import * as top from './top'

const MODULES = [
  top.ViewsModule,
  RouterModule.forChild(APP_ROUTES)
]

@NgModule({ imports: MODULES })
export class AppModule { }
