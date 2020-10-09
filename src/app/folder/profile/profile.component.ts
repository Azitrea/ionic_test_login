import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfileStorageTestService } from 'src/app/service/profile-storage-test.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  private userToken: string;
  private subscription: Subscription = new Subscription();

  constructor(private profileStorage: ProfileStorageTestService) { }

  get token() {
    return this.userToken;
  }

  ngOnInit() {
    this.subscription = this.profileStorage.token.subscribe(token => {
      console.log('token', token);
      this.userToken = token;

      if (token) {
        // get user;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
