import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { map, shareReplay, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {IJoke} from './interfaces/IJoke';



@Injectable({
  providedIn: 'root'
})
export class BlogService {

  postsurl = "https://jsonplaceholder.typicode.com/posts"
  posts$:Observable<IJoke[]>;

  constructor(private httpClient : HttpClient) { 

    this.posts$ = this.httpClient.get<IJoke[]>(this.postsurl).pipe(
        map((item : IJoke[]) => {
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

