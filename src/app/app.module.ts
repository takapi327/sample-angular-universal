import { NgModule }      from '@angular/core'
import { CommonModule }  from '@angular/common'
import { RouterModule }  from '@angular/router'

import { APP_ROUTES } from './app.routes'

import { TopViewsModule }           from './top'
import { ArticleDetailViewsModule } from './article/detail'

const MODULES = [
  CommonModule,
  TopViewsModule,
  ArticleDetailViewsModule,
  RouterModule.forChild(APP_ROUTES),
]

@NgModule({ imports: MODULES })
export class AppModule {}
