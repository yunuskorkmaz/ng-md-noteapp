import { Injectable } from '@angular/core';
import Dexie from 'dexie';
@Injectable({
  providedIn: 'root'
})
export class DbcoreService extends Dexie {


  public storage : Dexie.Table<MyStorage,number>
  public folder : Dexie.Table<MyFolder,number>;
  public note : Dexie.Table<MyNote,number>;


  constructor() { 
    super("NoteAppDatabase");
    this.version(1).stores({
      storage : '++id,name,color',
      folder : '++id,name,storageId',
      note: '++id,title,content,createdDate,updatedDate,folderId,storageId'
    });

    this.storage = this.table('storage');
    this.folder = this.table('folder');
    this.note = this.table('note');
  }
}

export interface MyStorage{
  id? : number,
  name?: string,
  color? : string,
  folders? : Array<MyFolder>
}

export interface MyFolder{
  id?:number,
  name? : string,
  storageId? : number

}

export class MyNote{
  id?: number;
  title?: string;
  content?:string;
  createdDate? : Date;
  updatedDate? : Date;
  folderId? : number;
  storageId? :number;
  storageName? : string;
  folderName? : string


}