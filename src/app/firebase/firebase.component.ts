import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostModel} from "./post.model";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  loadedPosts = [];
  isLoading = false;
  error = null;
  private url = 'https://angular-app-5208d.firebaseio.com/';

  constructor(
    private http: HttpClient,
    private postService: PostsService,
  ) {
  }

  ngOnInit() {
    this.onGetPosts();
  }

  onCreatePost(postData: PostModel) {
    this.postService.createPost(postData.title, postData.content);
    // add this post to list
    this.loadedPosts.push(postData);
  }

  onGetPosts() {
    this.isLoading = true;
    this.postService.getPosts().subscribe(posts => {
      this.isLoading = false;
      this.loadedPosts = posts;
    }, error => {
      this.isLoading = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    })
  }
}
