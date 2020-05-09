import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFileComponent } from './upload-file.component';
import { ImportComponent } from './import/import.component';
import { FilterComponent } from './filter/filter.component';
import { AccessFilterResolveService } from '../shared/resolve/access-filter-resolve.service';


const routes: Routes = [
  {
    path: '', component: UploadFileComponent, children: [
      { path: 'import', component: ImportComponent },
      { path: 'filter', component: FilterComponent, resolve: { access: AccessFilterResolveService } },
      { path: 'filter/:page', component: FilterComponent, resolve: { access: AccessFilterResolveService } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadFileRoutingModule { }
