import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SettingsRoutingModule } from './settings-routing.module';
import { StorageComponent } from './storage/storage.component';
import { SettingsComponent } from './settings/settings.component';
import { AddStorageComponent } from './add-storage/add-storage.component';
import { FolderItemComponent } from './folder-item/folder-item.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule
  ],
  declarations: [SettingsComponent, StorageComponent, AddStorageComponent, FolderItemComponent],
  exports : [SettingsComponent]

})
export class SettingsModule { }
