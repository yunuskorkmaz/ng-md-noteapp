import { Injectable, EventEmitter } from '@angular/core';
import Dexie from 'dexie';
import { DbcoreService, MyNote } from '../dbcore/dbcore.service';

@Injectable({
    providedIn: 'root'
})
export class NoteService {

    noteTable: Dexie.Table<MyNote, number>;

    addedNewNote: EventEmitter<MyNote> = new EventEmitter();
    constructor(private db: DbcoreService) {
        this.noteTable = db.table("note");
    }

    add(data) {
        return new Promise<MyNote>((resolve, reject) => {
            this.noteTable.add(data).then((key) => {
                this.noteTable.where('id').equals(key).first().then((note: MyNote) => {
                    this.addedNewNote.emit(note);
                    resolve(note);
                });
            });
        });
    }

    getNotesByFolderId(folderId) {
        return this.noteTable.where('folderId').equals(folderId).toArray();
    }

    getAll() {
        return this.noteTable.toArray();
    }
}


export interface NoteMode {
    type?: string;
    folderId?: number;
    noteId?: number;
    storageId?: number;
}


// empty
// new
//   edit
// preview 