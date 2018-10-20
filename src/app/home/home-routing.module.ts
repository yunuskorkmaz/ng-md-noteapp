import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from 'src/app/home/home-index/home-index.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteAddComponent } from './note-add/note-add.component';

const routes: Routes = [{
  path : '',
  component : HomeIndexComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
