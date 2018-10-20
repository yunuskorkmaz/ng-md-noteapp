import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { MyFolder } from '../../dbcore/dbcore.service';
import { FolderService } from 'src/app/services/folder.service';


@Component({
  selector: 'app-folder-item',
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.scss']
})
export class FolderItemComponent implements OnInit {

  @Input() folder: MyFolder;
  @Output() deletedFolder = new EventEmitter();
  editMode : boolean = false;
  constructor(private folderService : FolderService) { }
  deleteMode : boolean = false;
  ngOnInit() {
  }

  updateFolder(){
    this.folderService.update(this.folder.id,this.folder).then((value)=>{
      if(value > 0){
        this.editMode = false;
        this.deleteMode = false;
      }
      else{
        console.log("Folder name unchanged");
      }
    });
  }

  deleteFolder(){
    this.folderService.remove(this.folder.id).then(()=>{
      this.deletedFolder.emit(this.folder);
    })
  }
}
