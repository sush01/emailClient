import { Injectable } from '@angular/core';
import { HttpClient,provideHttpClient } from '@angular/common/http';
import { BehaviorSubject ,tap} from 'rxjs';


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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false);

  constructor(private http:HttpClient) { }

  usernameAvailable (username: string){
      return this.http.post<usernameAvailableResponse>(
        `${this.rootUrl}/auth/username`, {
        username: username
    });
  }

  signup(credentials: SignupCredentials){
    return this.http.post<SignupResponse> (
      `${this.rootUrl}/auth/signup`, credentials,{
        withCredentials: true
      })
      .pipe(
      tap(() => {
        this.signedin$.next(true);
        this.checkAuth().subscribe();
      })
    );
  }
  checkAuth(){
    return this.http.get<CheckAuthResponse>(`${this.rootUrl}/auth/signedin`,{
      withCredentials: true
    }).pipe(
      tap(response => {
        this.signedin$.next(response.signedin);
      })
    );
  }
}
