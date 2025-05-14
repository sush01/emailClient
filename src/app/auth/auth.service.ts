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

interface SigninResponse{
  username: string;
}


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false);
  username = '';

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
        tap(({username}) => {
          this.signedin$.next(true);
          //this.checkAuth().subscribe();
          this.username = username;
        })
      );
  }
  checkAuth() {
    return this.http.get<SignedinResponse>(`${this.rootUrl}/auth/signedin`, {withCredentials: true})
      .pipe(
        tap(({authenticated, username}) => {
          this.signedin$.next(authenticated);
          this.username = username;
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
    return this.http.post<SignedinResponse>(`${this.rootUrl}/auth/signin`, credentials)
    .pipe(
      tap(({username})=> {
        this.signedin$.next(true);
        this.username = username;
      })
    )
  }

  isAuthenticated() {
    return this.signedin$.asObservable();
  }
}
