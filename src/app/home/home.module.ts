import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeIndexComponent } from 'src/app/home/home-index/home-index.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { FolderListComponent } from "src/app/components/folder-list/folder-list.component";
import { NotelistComponent } from './notelist/notelist.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { FormsModule } from '@angular/forms';
import { NoteAddComponent } from './note-add/note-add.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  declarations: [
    HomeIndexComponent,
    SidebarComponent,
    FolderListComponent,
    NotelistComponent,
    NoteItemComponent,
    NoteDetailComponent,
    NoteAddComponent,
  ]
})
export class HomeModule { }
