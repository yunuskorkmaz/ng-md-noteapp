import { Injectable } from '@angular/core';
import { MyFolder, DbcoreService } from '../dbcore/dbcore.service';
import { Dexie } from 'dexie';


@Injectable({
  providedIn: 'root'
})
export class FolderService {
  folder: Dexie.Table<MyFolder, number>;

  constructor(public db: DbcoreService) {
    this.folder = db.table('folder');

  }

  getAll() {
    return this.folder.toArray();
  }

  add(data) {
    return new Promise<MyFolder>((resolve,reject)=>{
      this.folder.add(data).then((key) => {
        this.folder.where('id').equals(key).first().then((folder: MyFolder) => {
          resolve(folder);
        })
      });

    })
  }

  update(id, data) {
    return this.folder.update(id, data);
  }

  remove(id) {
    return this.folder.delete(id);
  }
  
  get(storageId){
    return this.folder.where('storageId').equals(storageId).toArray();
  }
}
