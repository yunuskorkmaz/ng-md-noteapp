import { Component, OnInit } from '@angular/core';
import { NoteService, NoteMode } from 'src/app/services/note.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Router } from '@angular/router';
import { MyNote } from 'src/app/dbcore/dbcore.service';

@Component({
    selector: 'app-notelist',
    templateUrl: './notelist.component.html',
    styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent implements OnInit {


    noteList: Array<MyNote> = [];
    currentFolderId: any;
    constructor(
        private noteService: NoteService,
        private sidebarService: SidebarService,
        private router: Router
    ) {
        sidebarService.selected.subscribe((selected) => {
            if (selected.type == 'storage') {
                console.log("storage " + selected.storage.name);
            }
            else if (selected.type == 'folder') {
                this.currentFolderId = selected.folder.id;
                this.noteService.getNotesByFolderId(selected.folder.id).then((list) => {
                    this.noteList = list;
                    console.log(list.length);
                })
            }
            else if (selected.type == "all"){
                this.currentFolderId = null;
                noteService.getAll().then((list)=>{
                    this.noteList = list;
                })
            }
        });

        noteService.addedNewNote.subscribe((note: MyNote) => {
            if (note.folderId == this.currentFolderId) {
                this.noteList.push(note);
            }
        });

    }

    ngOnInit() {
    }

    addNewNote() {
        this.sidebarService.noteMode.emit('new');

    }
}
