import { Component, OnInit } from '@angular/core';
import { NoteService, NoteMode } from 'src/app/services/note.service';
import { MyNote } from 'src/app/dbcore/dbcore.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnInit {

  note: MyNote = {};
  mode : string;
  constructor(private noteService : NoteService, private sidebarService : SidebarService) {
   this.mode = 'empty';
    sidebarService.noteMode.subscribe((mode)=>{
      this.note = {}; 
      this.mode = mode;
    });

    sidebarService.selectedNote.subscribe((note)=>{
      this.mode = 'edit';
      this.note = note;
    })
   }

  ngOnInit() {
  
  }

  prepareNote(){
    this.sidebarService.selectedNote.subscribe((note)=>{
      this.note = note;
    })
  }

  saveNote() {
    if(this.mode == null || this.mode == '' ){

    }
    else if(this.mode == 'edit'){
      // update
    }
    else if (this.mode == 'new'){
      this.note.folderId = this.sidebarService.selectedIds.folderId;
      this.note.storageId = this.sidebarService.selectedIds.storageId;
      this.noteService.add(this.note);

    }

  }


}
