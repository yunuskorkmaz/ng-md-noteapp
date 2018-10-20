import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { MyStorage, MyFolder } from 'src/app/dbcore/dbcore.service';
import { FolderService } from 'src/app/services/folder.service';

import swal from 'sweetalert2';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss']
})
export class FolderListComponent implements OnInit {

  @Input() storage : MyStorage
  @Output() selectedChanged : EventEmitter<object> =  new EventEmitter();
  isVisiable : boolean = true;
  class: string = "fa-angle-down";
  folders : Array<MyFolder>;


  constructor(private folderService : FolderService,
            private sidebarService : SidebarService) { }

  public toggleContent(){
   
    this.isVisiable = !this.isVisiable;
    if(this.isVisiable == false){
      this.class = " fa-angle-right";
    }
    else{
      this.class = "fa-angle-down";
    }
  }

  ngOnInit() {
    this.folderService.get(this.storage.id).then((folders : Array<MyFolder>)=>{
      this.folders = folders;
    })  
  }


  clickedStorage(storage : MyStorage){
    this.sidebarService.noteMode.emit('empty');
    this.sidebarService.selected.emit({
      type : "storage",
      storage : storage
    });
  }

  clickedFolder(folder : MyFolder){
    this.sidebarService.noteMode.emit('empty');
    this.sidebarService.selected.emit({
      type: "folder",
      folder : folder
    })
  }

  addNewFolder(storage : MyStorage){
    swal({
      title: 'Dosya İsmi Giriniz',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Ekle',
      showLoaderOnConfirm: true,
      preConfirm: (add) => {
        var newfolder: MyFolder = {
          name: add,
          storageId : storage.id
        };
        this.folderService.add(newfolder).then((added: MyFolder) => {

          this.folders.push(added);
        }).catch((err) => {
          swal({
            type: "error",
            text: 'Hata Oluştu'
          })
        })
      },
      allowOutsideClick: () => !swal.isLoading()
    })
  }

}
