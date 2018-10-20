import { Component, OnInit, Input } from '@angular/core';
import { MyNote } from 'src/app/dbcore/dbcore.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {

  @Input() note: MyNote ;
  selectClass: boolean = false;
  constructor(private sidebarService: SidebarService, private storageService : StorageService) {
  

    sidebarService.selectedNote.subscribe((selectedNote: MyNote) => {
      if (selectedNote.id == this.note.id)
        this.selectClass = true;
      else
        this.selectClass = false;
    })

  }

  ngOnInit() {
   
    if (this.note.storageId){
      if (this.storageService.storageList.filter(a => a.id == this.note.storageId)[0].name){
        this.note.storageName = this.storageService.storageList.filter(a => a.id == this.note.storageId)[0].name;
      }
    }
       
  }


  selectNote() {
    console.log(this.note);
    this.sidebarService.selectedNote.emit(this.note);
  }

}
