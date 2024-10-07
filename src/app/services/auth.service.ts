import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private adminUsername: string = 'admin';
  private adminPassword: string = '123';
  private isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  isLoggedIn(): boolean {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('loggedIn') === 'true';
    }
    return false;
  }

  login(username: string, password: string): boolean {
    if (username === this.adminUsername && password === this.adminPassword) {
      if (this.isLocalStorageAvailable()) {
        localStorage.setItem('loggedIn', 'true');
      }
      return true;
    }
    return false;
  }

  logout() {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('loggedIn');
    }
  }
}
