import { Component } from '@angular/core'

import { ViewSelectSnapshot } from '@ngxs-labs/select-snapshot'

import { SpecialArticleState } from 'src/lib/state/article/special-article'

@Component({
  templateUrl:   './page-main.html',
  styleUrls:   [ './page-main.scss' ]
})
export class PageMainComponent {

  constructor() {}

  @ViewSelectSnapshot(SpecialArticleState) state: SpecialArticleState.Model

  ngOnInit(): void {
    SpecialArticleState.actLoad.emit()
  }
}
