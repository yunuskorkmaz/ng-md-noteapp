import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { MyStorage, MyFolder } from 'src/app/dbcore/dbcore.service';
import swal from 'sweetalert2/dist/sweetalert2.js';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 

  public storageList : Array<MyStorage>;
  constructor(public storageService : StorageService, private sidebarService : SidebarService) { 
   
    
  }

  goto(where){
    this.sidebarService.noteMode.emit('empty');
    this.sidebarService.selected.emit({
      type: where
    });
  }

  ngOnInit() {
    this.storageService.getAll().then((storeges: Array<MyStorage>) => {
      this.storageList = storeges;
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
        var newstorage: MyStorage = {
          name: add
        };
        this.storageService.add(newstorage).then((added: MyStorage) => {
         
          this.storageList.push(added);
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

  selectedChanged(item){
    console.log(item);
  }

 
}
