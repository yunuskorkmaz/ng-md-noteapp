import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';
import { MyNote } from 'src/app/dbcore/dbcore.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {

  note : MyNote = {};
  
  
  constructor(private sidebarService: SidebarService,private noteService: NoteService) { 
  
  }

  ngOnInit() {
  }


  saveNote(){
    this.note.folderId = this.sidebarService.selectedIds.folderId;
    this.note.storageId = this.sidebarService.selectedIds.storageId;
    this.noteService.add(this.note);
    
  }
}
