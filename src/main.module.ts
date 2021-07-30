import { NgModule, InjectionToken }                       from '@angular/core'
import { APP_BASE_HREF }                                  from '@angular/common'
import { HttpClient, HttpClientModule }                   from '@angular/common/http'
import { RouterModule }                                   from '@angular/router'
import { BrowserModule, BrowserTransferStateModule }      from '@angular/platform-browser'
import { BrowserAnimationsModule }                        from '@angular/platform-browser/animations'
import { MAT_FORM_FIELD_DEFAULT_OPTIONS }                 from '@angular/material/form-field'
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core'
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter }     from '@angular/material-moment-adapter'

import { NgxsModule }                       from '@ngxs/store'
import { NgxsLoggerPluginModule }           from '@ngxs/logger-plugin'
import { NgxsEmitPluginModule }             from '@ngxs-labs/emitter'
import { NgxsSelectSnapshotModule }         from '@ngxs-labs/select-snapshot'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader }              from '@ngx-translate/http-loader'

import { AppComponent } from './app'
import { AppModule }    from './app/app.module'
import { environment }  from './environments/environment'

const DEPLOY_URL = new InjectionToken<number>('DEPLOY_URL')

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/' )
}

const MODULES = [
  HttpClientModule,
  RouterModule.forRoot([]),
  BrowserModule.withServerTransition({ appId: 'serverApp' }),
  BrowserAnimationsModule,
  BrowserTransferStateModule,
  NgxsModule.forRoot([], { developmentMode: !environment.production }),
  NgxsEmitPluginModule.forRoot(),
  NgxsSelectSnapshotModule.forRoot(),
  environment.production ? [] : [ NgxsLoggerPluginModule.forRoot() ],
  TranslateModule.forRoot({
    loader: {
      provide:    TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps:       [ HttpClient ]
    }
  }),
  AppModule
]

@NgModule({
  imports:        MODULES,
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [
    { provide: DEPLOY_URL, useValue: '' },
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'standard', floatLabel: 'always' }},
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [ MAT_DATE_LOCALE ] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class MainModule {}
