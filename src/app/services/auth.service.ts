import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

@Injectable({providedIn: 'root'})
export class AuthService {
  // API key is in firebase project settings
  // <appAddress>/settings/general/
  private firebaseAPIkey = 'AIzaSyApUv_owosn0Lufw9ZtJs5f5xigHur6paE';
  // url from https://firebase.google.com/docs/reference/rest/auth
  private signUpURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='

  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>( this.signUpURL + this.firebaseAPIkey,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
      catchError(errorResp => {
        let errorMessage = 'Unknown Error'
        if (!errorResp.error || !errorResp.error.error) {
          return throwError(errorMessage);
        }
        switch (errorResp.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'This email already exist';
            break;
          case 'TODO':
            break;
          default :
            break;
        }
        return throwError(errorMessage);
      })
    )
  }
}
