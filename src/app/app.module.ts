import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app'
import { APP_ROUTES } from './app.routes'

import * as top from './top'

const MODULES = [
  top.ViewsModule,
  RouterModule.forRoot(APP_ROUTES),
  BrowserModule.withServerTransition({ appId: 'serverApp' }),
]

@NgModule({
  imports:        MODULES,
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
