import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerRoutingModule } from './file-manager-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FolderStructureComponent } from './folder-structure/folder-structure.component';
import { FileManagerComponent } from './file-manager-component.component';


@NgModule({
  declarations: [
    FileManagerComponent,
    ToolbarComponent,
    FolderStructureComponent,
    FileManagerComponent
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
  ]
})
export class FileManagerModule { }
