import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { HttpClient }                      from '@angular/common/http'
import { isPlatformServer }                from '@angular/common'
import { makeStateKey, TransferState }     from '@angular/platform-browser'

import { of }              from 'rxjs'
import { tap, catchError } from 'rxjs/operators'

import { State, StateContext }                         from '@ngxs/store'
import { Emitter, Emittable, Receiver, EmitterAction } from '@ngxs-labs/emitter'

import { JsValueSpecialArticle } from 'src/lib/api/article'

export namespace SpecialArticleState {

  export interface Model {
    data: JsValueSpecialArticle | null
  }
}

@Injectable()
@State<SpecialArticleState.Model>({
  name: 'special_article',
  defaults: {
    data: null
  }
})
export class SpecialArticleState {

  private static http: HttpClient
  private static STATE_API = {
    ARTICLE_LOAD: '/api/article/plant'
  }

  private static transferState: TransferState
  private static platformId:    any

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private http:          HttpClient,
    private transferState: TransferState
  ) {
    SpecialArticleState.http          = http
    SpecialArticleState.platformId    = platformId
    SpecialArticleState.transferState = transferState
  }

  @Emitter(SpecialArticleState.load) static actLoad: Emittable<void>

  @Receiver()
  static load(
    ctx:    StateContext<SpecialArticleState.Model>,
    action: EmitterAction<void>
  ) {

    const STATE_KEY = makeStateKey<string>('special-article-state-key')

    if (this.transferState.hasKey(STATE_KEY)) {
      const data = this.transferState.get<JsValueSpecialArticle | null>(STATE_KEY, null)

      this.transferState.remove(STATE_KEY)
      return ctx.patchState({ data })
    } else {

      return this.http.get<JsValueSpecialArticle | null>(this.STATE_API.ARTICLE_LOAD).pipe(
        tap(data => {
          if (isPlatformServer(this.platformId)) {
            this.transferState.set<JsValueSpecialArticle | null>(STATE_KEY, data)
          } else {
            ctx.patchState({ data })
          }
        }),
        catchError(_ => {
          ctx.patchState({ data: null })
          return of(null)
        })
      )
    }
  }
}
