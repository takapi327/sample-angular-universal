import { NgModule }                                from '@angular/core'
import { HTTP_INTERCEPTORS }                       from '@angular/common/http'
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server'

import { MainModule }   from './main.module'
import { AppComponent } from './app'

import { SSRRequestInterceptor } from './lib/router/'

const MODULES = [
  MainModule,
  ServerModule,
  ServerTransferStateModule
]

@NgModule({
  imports:    MODULES,
  bootstrap: [AppComponent],
  providers: [
    {
      provide:  HTTP_INTERCEPTORS,
      useClass: SSRRequestInterceptor,
      multi:    true
    }
  ]
})
export class AppServerModule {}
