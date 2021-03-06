import { PostListComponent } from './posts/post-list/post-list-component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './posts/post-create/post-create-component';


const routes: Routes = [
  {path : '', component : PostListComponent},
  {path : 'create', component : PostCreateComponent},
  {path : 'edit/:post._id', component : PostCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
