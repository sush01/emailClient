import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

interface usernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}
interface SignupResponse {
  username: string;
}
interface CheckAuthResponse {
  signedin: boolean;
}

interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

 interface SigninCredentials{
  username: string;
  password: string;

}


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<usernameAvailableResponse>(
      `${this.rootUrl}/auth/username`,
      {
        username: username,
      }
    );
  }

  signup(credentials: SignupCredentials) {
    return this.http
      .post<SignupResponse>(`${this.rootUrl}/auth/signup`, credentials, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.checkAuth().subscribe();
        })
      );
  }
  checkAuth() {
    return this.http.get<SignedinResponse>(`${this.rootUrl}/auth/signedin`, {withCredentials: true})
      .pipe(
        tap(({authenticated}) => {
          this.signedin$.next(authenticated);
        })
      );
  }

  signout(){
    return this.http.post(`${this.rootUrl}/auth/signout`, {withCredentials: true})
    .pipe(
      tap(()=> {
        this.signedin$.next(false);
      })
    )
  }

  signin(credentials: SigninCredentials){
    return this.http.post(`${this.rootUrl}/auth/signin`, credentials)
    .pipe(
      tap(()=> {
        this.signedin$.next(true);
      })
    )
  }
}
