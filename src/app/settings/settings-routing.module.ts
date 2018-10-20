import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorageComponent } from './storage/storage.component';
import { SettingsComponent } from './settings/settings.component';
import { AddStorageComponent } from './add-storage/add-storage.component';

const routes: Routes = [
 {
   path:'' ,
    component : SettingsComponent,
    children :[
      {
        path : '' , redirectTo : 'storage',

      }
      ,{
        path : 'storage', component : StorageComponent
      }
      ,{
        path : 'add-storage' , component : AddStorageComponent
      }
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
