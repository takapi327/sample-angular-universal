import { Component }      from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ViewSelectSnapshot } from '@ngxs-labs/select-snapshot'

import { SpecialArticleState } from 'src/lib/state/article/special-article'

@Component({
  templateUrl:   './page-main.html',
  styleUrls:   [ './page-main.scss' ]
})
export class PageMainComponent {

  constructor(
    private route: ActivatedRoute
  ) {}

  @ViewSelectSnapshot(SpecialArticleState) state: SpecialArticleState.Model

  ngOnInit(): void {
    SpecialArticleState.actLoad.emit(this.route.snapshot.params.id)
  }
}
