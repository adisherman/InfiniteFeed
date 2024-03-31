import {uuid} from 'common/Utils';
import {makeAutoObservable} from 'mobx';
import PostModel from './PostModel';
import {
  randFirstName,
  randLastName,
  randJobTitle,
  randParagraph,
  randAvatar,
} from '@ngneat/falso';

class PostsStore {
  posts: PostModel[] = [];
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  // Fetch posts (stubbed for demonstration)
  fetchPosts(refresh?: boolean): void {
    this.setLoading(true);

    setTimeout(() => {
      const newPosts: PostModel[] = Array.from({length: 10}).map(
        _ =>
          new PostModel({
            id: uuid(uuid('post')),
            userName: randFirstName() + ' ' + randLastName(),
            avatar: randAvatar(),
            title: randJobTitle(),
            content: randParagraph(),
            likes: new Set(),
            comments: [],
          }),
      );

      refresh ? this.setPosts(newPosts) : this.addPosts(newPosts);
      this.setLoading(false);
    }, 1000);
  }

  // set new posts
  private setPosts(newPosts: PostModel[]) {
    this.posts = [...newPosts];
  }

  // add posts to existing posts
  private addPosts(newPosts: PostModel[]) {
    this.posts = [...this.posts, ...newPosts];
  }

  // set loading state
  private setLoading(value: boolean) {
    this.isLoading = value;
  }
}

export default new PostsStore();
