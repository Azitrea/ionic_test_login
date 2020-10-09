import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileStorageTestService {
  public token: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() { }

  public isAuthenticated() {
    console.log(this.token.getValue());
    return !!this.token.getValue();
  }
}
