import { NgModule }     from '@angular/core'
import { ServerModule } from '@angular/platform-server'

import { MainModule }   from './main.module'
import { AppComponent } from './app'

const MODULES = [
  MainModule,
  ServerModule,
]

@NgModule({
  imports:    MODULES,
  bootstrap: [AppComponent],
})
export class AppServerModule {}
