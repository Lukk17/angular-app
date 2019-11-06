import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {BehaviorSubject, throwError} from "rxjs";
import {User} from "../auth/user.model";
import {Router} from "@angular/router";

export interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService {
  // API key is in firebase project settings
  // <appAddress>/settings/general/
  private firebaseAPIkey = 'AIzaSyApUv_owosn0Lufw9ZtJs5f5xigHur6paE';
  // url from https://firebase.google.com/docs/reference/rest/auth
  private signUpURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  private logInURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='

  user = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.signUpURL + this.firebaseAPIkey,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
      catchError(this.handleError),
      tap(respData => {
          this.handleAuth(respData);
      })
    )
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.logInURL + this.firebaseAPIkey, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(this.handleError),
      tap(respData => {
        this.handleAuth(respData);
      })
    );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth'])
  }

  private handleAuth(respData: AuthResponseData){
    // extra + before respData to convert it to number
    const expirationDate = new Date(new Date().getTime() + +respData.expiresIn *1000);
    const user = new User(respData.email, respData.localId, respData.idToken, expirationDate);
    // send user from response to any subscriber to 'user' subject
    this.user.next(user);
  }

  private handleError(errorResp: HttpErrorResponse) {
    let errorMessage = 'Unknown Error'
    if (!errorResp.error || !errorResp.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResp.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exist';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is invalid';
        break;
      default :
        break;
    }
    return throwError(errorMessage);
  }
}
