import { Routes } from '@angular/router'

import * as top from './top'

export const APP_ROUTES: Routes = [
  { path: '', component: top.PageMainComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]
