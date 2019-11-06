import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {take, tap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

// must be added in providers in app.module in special way
@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = null;
    this.auth.user.pipe(
      // take with count 1 will get data only once from observable
      take(1)
    ).subscribe(user => {
      token = user.token;
    });


    // if no token then do not add anything to as parameter
    if(!token) {
      return next.handle(req);
    }

    // to alter request it needs to be cloned, modified and returned in handle method
    const modifiedReq = req.clone(
      {
        // adds this authentication parameter to every http request
        params: new HttpParams().set('auth', token)
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
