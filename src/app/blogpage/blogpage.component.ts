import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BlogService } from '../blog.service';

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
        next :(item)=>{
          console.log("component tap item ",item)
        }
      })
    ).subscribe((resdata:any)=>{
      console.log("resdata ",resdata)
    })
  }
}
