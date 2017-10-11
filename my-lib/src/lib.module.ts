import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { BarService } from './bar/bar.service';

import { PanelModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    PanelModule
  ],
  declarations: [
    FooComponent
  ],
  exports: [
    FooComponent,
    PanelModule
  ]
})
export class MyLibModule {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: MyLibModule,
      providers: [
        BarService
      ]
    };
  }
}
