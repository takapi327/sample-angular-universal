import { Routes } from '@angular/router'

import * as top from './top'

import * as articleDetail from './article/detail'

export const APP_ROUTES: Routes = [
  { path: '', component: top.PageMainComponent },
  { path: 'article/:id', component: articleDetail.PageMainComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]
