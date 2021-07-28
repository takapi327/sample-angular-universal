import { NgModule }      from '@angular/core'
import { CommonModule }  from '@angular/common'
import { RouterModule }  from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { APP_ROUTES } from './app.routes'

import * as top           from './top'
import * as articleDetail from './article/detail'

import { StateModule } from 'src/lib/state'

const MODULES = [
  top.ViewsModule,
  articleDetail.ViewsModule,
  CommonModule,
  StateModule,
  RouterModule.forChild(APP_ROUTES),
  BrowserModule.withServerTransition({ appId: 'serverApp' }),
]

@NgModule({ imports: MODULES })
export class AppModule { }
