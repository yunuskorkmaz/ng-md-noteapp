import { NgModule, Optional, SkipSelf } from '@angular/core';
import { DbcoreService } from "./dbcore.service";
@NgModule({
  imports: [

  ],
  providers:[
    DbcoreService
  ]
})
export class DbcoreModule {

  constructor(@Optional() @SkipSelf() parentModule: DbcoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
 }
