import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { MyStorage } from '../../dbcore/dbcore.service';
import swal from 'sweetalert2';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-storage',
  templateUrl: './add-storage.component.html',
  styleUrls: ['./add-storage.component.scss']
})
export class AddStorageComponent  {

  constructor(public service: StorageService, public location : Location) {

   }

  name :string;
  add(name){
    var storage : MyStorage = {
      name : name
    }
    this.service.add(storage);
    this.location.back();
    swal({
      position: 'top-end',
      type: 'success',
      text: 'Saklama Alanı Eklendi',
      showConfirmButton: false,
      timer: 1500
    })
  }

  


}
