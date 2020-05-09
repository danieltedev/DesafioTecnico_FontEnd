import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UploadFileRoutingModule } from './upload-file-routing.module';
import { ImportComponent } from './import/import.component';
import { FilterComponent } from './filter/filter.component';
import { UploadFileComponent } from './upload-file.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ImportComponent, FilterComponent, UploadFileComponent],
  imports: [
    CommonModule,
    UploadFileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UploadFileModule { }
