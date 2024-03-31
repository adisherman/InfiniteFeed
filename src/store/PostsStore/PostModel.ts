import {makeAutoObservable} from 'mobx';

class PostModel {
  id: string;
  userName: string;
  avatar: string;
  title: string;
  content: string;
  likes: Set<string>;
  comments: string[];

  constructor({
    id,
    userName,
    avatar,
    title,
    content,
    likes = new Set(),
    comments = [],
  }: {
    id: string;
    userName: string;
    avatar: string;
    title: string;
    content: string;
    likes: Set<string>;
    comments: string[];
  }) {
    this.id = id;
    this.userName = userName;
    this.avatar = avatar;
    this.title = title;
    this.content = content;
    this.likes = likes;
    this.comments = comments;
    makeAutoObservable(this);
  }

  // Add or remove like
  addRemoveLike(userId: string): void {
    if (this.likes.has(userId)) {
      this.likes.delete(userId);
      return;
    }
    this.likes.add(userId);
  }

  // Add comment
  addComment(comment: string): void {
    this.comments = [...this.comments, comment];
  }
}

export default PostModel;
