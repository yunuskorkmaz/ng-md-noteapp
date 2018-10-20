import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { FolderService } from 'src/app/services/folder.service';
import { MyStorage, MyFolder } from '../../dbcore/dbcore.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  storages : Array<MyStorage>;
  constructor(private storageService:StorageService,
    private folderService : FolderService) { }

  ngOnInit() {
    this.storageService.getAll().then((values: Array<MyStorage>) =>{
      this.storages = values;
      this.storages.forEach((value,index)=>{
        this.folderService.get(value.id).then((items :Array<MyFolder>)=>{
          value.folders = items;
        })
      })
    });
    
  }
  

  addNewStorage(){
    swal({
      title: 'Saklama Alanı İsmi',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Ekle',
      showLoaderOnConfirm: true,
      preConfirm: (add) => {
        var newstorage : MyStorage={
          name : add
        };
          this.storageService.add(newstorage).then((added: MyStorage)=>{
              added.folders = new Array<MyFolder>();
              this.storages.push(added);
          }).catch((err)=>{
            swal({
                type : "error",
                text : 'Hata Oluştu'
              })
          })
      },
      allowOutsideClick: () => !swal.isLoading()
    })
  }

  deletedFolder(folder :MyFolder){
    this.ngOnInit();
  }

  addNewFolder(storageId) {
    var folder: MyFolder = {
      name: "New Folder",
      storageId : storageId
    }
    this.folderService.add(folder).then((folder)=>{
      this.storages.filter(z=> z.id == folder.storageId)[0].folders.push(folder);
    })
  }

  deleteStorage(storage : MyStorage){
    this.storageService.remove(storage.id)
    .then(()=>{
      this.storages.splice(this.storages.indexOf(storage),1);
    })
  }
}
