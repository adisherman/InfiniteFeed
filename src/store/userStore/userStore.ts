import {makeAutoObservable} from 'mobx';
import {randFirstName, randAvatar} from '@ngneat/falso';
class UserStore {
  id: string = '';
  userName: string = '';
  avatar: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  // Fetch user data (stubbed for demonstration)
  getUserData() {
    this.setUserData(
      '1',
      randFirstName() + ' ' + randFirstName(),
      randAvatar(),
    );
  }

  // set user data
  private setUserData(id: string, userName: string, avatar: string) {
    this.id = id;
    this.userName = userName;
    this.avatar = avatar;
  }
}

export default new UserStore();
