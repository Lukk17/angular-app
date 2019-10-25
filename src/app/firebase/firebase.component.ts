import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  loadedPosts= [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onCreatePost(postData: {title: string; content: string}) {

  }

  onFetchPosts() {

  }

  onClearPosts() {

  }
}
