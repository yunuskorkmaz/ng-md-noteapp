import { Injectable, EventEmitter } from '@angular/core';

import { DbcoreService, MyStorage, MyFolder } from '../dbcore/dbcore.service';
import Dexie from 'dexie';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    storage: Dexie.Table<MyStorage, number>;

    added: EventEmitter<MyStorage> = new EventEmitter();


    storageList : Array<MyStorage> = [];

    constructor(public db: DbcoreService) {
       this.storage = db.table("storage");
       this.getAll().then((list)=>{
           this.storageList = list;
       });
    }

    getAll() {
        return this.storage.toArray();
    }

    add(data) {
        return new Promise<MyFolder>((resolve, reject) => {
            this.storage.add(data).then((key) => {
                this.storage.where('id').equals(key).first().then((storage: MyStorage) => {
                    resolve(storage);
                });
            });

        });
    }

    update(id, data) {
        return this.storage.update(id, data);
    }

    remove(id) {
        return this.storage.delete(id);
    }

    getAllWithFolders() {
        let storeges: MyStorage[];
        this.getAll().then(function(values) {
            storeges = values;
        });
    }
}
