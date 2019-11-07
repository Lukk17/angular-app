import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {BehaviorSubject, throwError} from "rxjs";
import {User} from "../auth/user.model";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

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
  private LOCAL_STORAGE_USERDATA = 'userData';
  private tokenExpirationTime: any;

  // API key is in firebase project settings
  // <appAddress>/settings/general/
  private firebaseAPIkey = environment.firebaseAPIkey;
  // url from https://firebase.google.com/docs/reference/rest/auth
  private signUpURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  private logInURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='

  // behavior subject remember last value even before it was created
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
      catchError(AuthService.handleError),
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
      catchError(AuthService.handleError),
      tap(respData => {
        this.handleAuth(respData);
      })
    );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem(this.LOCAL_STORAGE_USERDATA);

    // when logout clear tokenExpirationTime to stop autoLogout
    if (this.tokenExpirationTime) {
      clearTimeout(this.tokenExpirationTime);
    }
    this.tokenExpirationTime = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTime = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  autoLogin() {
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_USERDATA));
    if (userData) {
      const loadedUser = new User(
        userData.email,
        userData.id,
        userData._token,
        new Date(userData._tokenExpirationDate)
      );

      // if token is not valid it will return null (which will be false)
      // (as defined in getter inside user.model.ts)
      if (loadedUser.token) {
        this.user.next(loadedUser);
        const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();

        this.autoLogout(expirationDuration);
      }
    }
  }

  private handleAuth(respData: AuthResponseData) {
    // extra + before respData to convert it to number
    const expirationDate = new Date(new Date().getTime() + +respData.expiresIn * 1000);
    const user = new User(respData.email, respData.localId, respData.idToken, expirationDate);
    // send user from response to any subscriber to 'user' subject
    this.user.next(user);
    // save data to more permanent memory,
    // which can survive site reload and browser restart
    // use JSON lib to convert js object to string
    localStorage.setItem(this.LOCAL_STORAGE_USERDATA, JSON.stringify(user));
    // call to autoLogout after expiration time
    // + (plus) is for parsing respData.expiresIn to number
    this.autoLogout(+respData.expiresIn * 1000)
  }

  private static handleError(errorResp: HttpErrorResponse) {
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
