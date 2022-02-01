import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    request = request.clone({
      setHeaders: {
        'Authorization': this.getToken(),
      }
    });

    return next.handle(request);
  }

  private getToken() {
      return 'Basic ' + btoa('mestre:totvs')
  }
}
