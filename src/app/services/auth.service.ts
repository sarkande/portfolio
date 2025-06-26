import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { UserAuthResponse } from '../interfaces/user-auth-response';
import { catchError, Observable, map, throwError } from 'rxjs';
import { UserAuthLogin } from '../interfaces/user-auth-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  login(loginData: UserAuthLogin): Observable<boolean> {
    return this.userService.login(loginData).pipe(
      map((user: UserAuthResponse) => {
        if (user && user.token) {
          sessionStorage.setItem('jwt_token', user.token);
          return true;
        }
        return false;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
  getToken(): string | null {
    return sessionStorage.getItem('jwt_token');
  }

  logout(): void {
    sessionStorage.removeItem('jwt_token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; 
  }
}
