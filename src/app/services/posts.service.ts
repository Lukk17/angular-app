import {Injectable} from "@angular/core";
import {PostModel} from "../firebase/post.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";

// provided in root mean same
// as it will be added to app.module.ts or app.component.ts section of: "providers: [],"
@Injectable(
  {
    providedIn: 'root'
  })
export class PostsService {

  private url = 'https://angular-app-5208d.firebaseio.com/';

  constructor(private http: HttpClient) {
  }

  createPost(title: string, content: string) {
    const postData: PostModel = {
      title: title,
      content: content
    };

    // have to subscribe, if not angular will not send any (POST too) request
    this.http
    // specify type of object
      .post<PostModel>(
        this.url + 'posts.json',
        postData,
        {
          // with this angular will give full response, not only it's body
          observe: "response"
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  /**
   return the observable to which component can subscribe
   */
  getPosts() {

    // have to subscribe, if not angular will not send any (GET too) request
    // pipe will transform data to useful,
    // for example by converting json name (firebase generated ID) to id
    return this.http
    // response is of type PostModel,
      .get<PostModel>(this.url + 'posts.json',
        {
          // adding custom headers - this will do nothing
          headers: new HttpHeaders({"Custom-Header": 'Hello'}),

          // adds params - adding this will force firebase to format response json in easier to read way
          // same as adding to URL ?print=pretty
          params: new HttpParams().set('print', 'pretty'),

          // optional specification how to interpret response - default anyway is json
          responseType: 'json'
        }
      )
      .pipe(
        // if not specified in get, type can be specify as below:
        // map((response: { [key: string]: PostModel }) => {
        // where [key: string] is angular notation for any string,
        // which will be generated from firebase as ID (key)
        map(response => {
          const postsArray: PostModel[] = [];
          for (const key in response) {
            // response must have property of key to be valid
            if (response.hasOwnProperty(key)) {
              //  ... will alter json adding id,
              //  which will be identical as generated by firebase (key in map)
              postsArray.push({...response[key], id: key})
            }
          }
          return postsArray;
        }));
  }

  /**
   return the observable to which component can subscribe
   */
  deletePosts() {
    return this.http.delete(this.url + 'posts.json');
  }
}
