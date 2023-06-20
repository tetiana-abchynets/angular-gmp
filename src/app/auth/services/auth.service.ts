import { Injectable } from '@angular/core';
import { IUser } from '../../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageKey = 'fakeUser';
  private fakeUser: IUser = {
    id: 1,
    firstName: 'john',
    lastName: 'doe',
    token: 'fake_token'
  };

  login(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.fakeUser));
    console.log('logged in successfully');
  }

  logout(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.localStorageKey) !== null;
  }

  getUserInfo(): string | null {
    const storedUser = localStorage.getItem(this.localStorageKey);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      return `${user.firstName} ${user.lastName}`;
    }
    return null;
  }
}
