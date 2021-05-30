import { NgModule }   from '@angular/core'
import { NgxsModule } from '@ngxs/store'

import * as state from './public'

@NgModule({
  imports: [
    NgxsModule.forFeature([

    ])
  ]
})
export class StateModule {}
