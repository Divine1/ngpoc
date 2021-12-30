import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BlogService } from '../blog.service';
import {IJoke} from './../interfaces/IJoke';
@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.scss']
})
export class BlogpageComponent implements OnInit {

  constructor(private blogService : BlogService) { }

  ngOnInit(): void {
  }

  getPosts(){
    this.blogService.getPosts().pipe(
      tap({
        next :(item:IJoke[])=>{
          console.log("component tap item ",item)
        }
      })
    ).subscribe((resdata:IJoke[])=>{
      console.log("resdata ",resdata)
    })
  }
}
