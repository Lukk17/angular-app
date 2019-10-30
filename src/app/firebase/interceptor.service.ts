import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

// must be added in providers in app.module in special way
export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor request sent -  by Lukk ;)');

    // to alter request it needs to be cloned, modified and returned in handle method
    const modifiedReq = req.clone(
      {
        headers: req.headers.append("Lukk", " is here")
      });
    return next.handle(modifiedReq)
      // with pipe and tap response can be altered
      .pipe(
      tap(event => {
        console.log("interceptor logging response event type: " + event.type)
      })
    );
  }
}
