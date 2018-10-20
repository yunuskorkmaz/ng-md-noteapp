import { Injectable, EventEmitter } from '@angular/core';
import { reject } from 'q';
import { MyNote } from '../dbcore/dbcore.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  selected : EventEmitter<object> = new EventEmitter();
  noteMode: EventEmitter<string> = new EventEmitter();
  selectedNote : EventEmitter<MyNote> = new EventEmitter();
  selectedIds : any = {};

  
  constructor() {
    this.selected.subscribe((selected) => {
     
      if (selected.type == "folder") {
        this.selectedIds.folderId = selected.folder.id;
        this.selectedIds.storageId = selected.folder.storageId;
      }
      else if (selected.type == "storage") {
        this.selectedIds.storageId = selected.storage.id;
        this.selectedIds.folderId = null;
      }
    
    });

  



   }
}
