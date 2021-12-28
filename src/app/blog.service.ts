import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { map, shareReplay, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


interface Joke{
  userId : string;
  id: string;
  title : string;
  body :string;

}

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  postsurl = "https://jsonplaceholder.typicode.com/posts"

  posts$:Observable<Joke[]>;

  constructor(private httpClient : HttpClient) { 

    this.posts$ = this.httpClient.get<Joke[]>(this.postsurl).pipe(
        map(item => {

          console.log("map item ",item)
          return item;
        }),
        
        shareReplay(1)
      )
    
  }

  getPosts(){
    return this.posts$;
  }

}

