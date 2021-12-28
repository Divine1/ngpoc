import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { ChathomeComponent } from './chathome/chathome.component';

const routes: Routes = [
  {
    path : "chathome", component: ChathomeComponent
  },
  {
    path : "blogpage", component: BlogpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
