import { Injectable, Inject, Optional }                         from '@angular/core'
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http'

import { Request }     from 'express'
import { Observable }  from 'rxjs'
import { REQUEST }     from '@nguniversal/express-engine/tokens'
import { environment } from 'src/environments/environment'

@Injectable()
export class SSRRequestInterceptor implements HttpInterceptor{

  constructor(
    @Optional() @Inject(REQUEST) protected request: Request
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let serverReq: HttpRequest<any> = req
    if (this.request) {

      let newUrl = environment.apiPath
      if (!req.url.startsWith('/')) {
        newUrl += '/'
      }
      if (req.url.split('/')[0] === 'assets') {
        newUrl = `${this.request.protocol}://${this.request.get('host')}/`
      }
      newUrl += req.url
      serverReq = req.clone({ url: newUrl })
    }
    return next.handle(serverReq)
  }
}
